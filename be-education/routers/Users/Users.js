import express from "express";
const routerUser = express.Router();
import { getAllroles, getUsers } from "../../controller/Users/Users.js";
import { verifyToken } from "../../middleware/VerifyToken.js";

routerUser.get('/roles', getAllroles);
routerUser.get('/users', verifyToken('admin') , getUsers)
export default routerUser;