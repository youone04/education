import Jwt  from 'jsonwebtoken';
import dbs from '../models/index.js';

export const refreshToken = async(req, res) => {
    try{
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await dbs.users.findAll({
            where: {
                refresh_token: refreshToken
            },
            include: ["roles"]
        })
        if(!user[0]) return res.sendStatus(403);
        Jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET, (error, decoded) =>{
            if(error) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const role = user[0].roles.map(obj => {
                return obj.role
              });

            const accessToken = Jwt.sign({userId, name , email , role},
                process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn: '15s'
                }
            );
            res.json({accessToken})
        })

    }catch(error){
        res.sendStatus(403).json(error.response && error.response.data.message ? error.response.data.message : error.message);
        console.log(error)
    }
}