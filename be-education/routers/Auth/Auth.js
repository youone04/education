import express from "express";
const routerAuth = express.Router();
import { refreshToken } from "../../controller/RefreshToken.js";
import { Login , LogOut , Register } from "../../controller/Auth/Auth.js";

routerAuth.get('/token' , refreshToken);
routerAuth.post('/login' , Login);
routerAuth.post('/registrasi' , Register);
routerAuth.delete('/logout' , LogOut);

export default routerAuth;

