
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dbs from "../../models/index.js";

export const Register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ msg: "Password dan confirm password tidak cocok" });
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password.toString(), salt);
      const regist = await dbs.users.create({
        name: name,
        email: email,
        password: hashPassword,
      });
  
     await dbs.roles.create({
      userId: regist.dataValues.id,
      role: 'editor'
      });
  
      res.status(200).json({ message: hashPassword });
    } catch (error) {
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  };
  
  export const Login = async (req, res) => {
    try {
      const user = await dbs.users.findAll({
        where: {
          email: req.body.email,
        },
        include: ["roles"]
      })
      const match = await bcrypt.compare(req.body.password, user[0].password);
      if (!match) return res.status(400).json({ message: "Wrong password" });
      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;
      const role = user[0].roles.map(obj => {
        return obj.role
      });
      const accessToken = Jwt.sign(
        { userId, name, email , role },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "20s",
        }
      );
  
      const refreshToken = Jwt.sign(
        { userId, name, email ,role },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
  
      await dbs.users.update(
        { refresh_token: refreshToken },
        {
          where: {
            id: userId,
          },
        }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
      });
      res.json({accessToken});
    //  res.json({ data: user});
    } catch (error) {
      res.status(404).json({ message: "Email tidak ditemukan" });
    }
  };
  
  export const LogOut = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await dbs.users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(404);
    const userId = user[0].id;
    await dbs.users.update(
      { refresh_token: null },
      {
        where: {
          id: userId,
        },
      }
    );
    res.clearCookie("refreshToken");
    return res.sendStatus(200);
  };