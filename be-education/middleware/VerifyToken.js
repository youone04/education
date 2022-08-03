import jwt from "jsonwebtoken";

export const verifyToken = (roleUser) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const { role } = req.headers;
      const token = authHeader && authHeader.split(" ")[1];
      // if ( role !== roleUser) return res.sendStatus(403); //forbiden
      if (token === null) return res.sendStatus(401); //unauthorization
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); //forbiden
        req.email = decoded.email;
        next();
      });
    } catch (error) {
      console.log(error);
    }
  };
};
