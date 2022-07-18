import express from "express";
import { getUsers , Register ,Login ,LogOut } from '../controller/Users.js';
import { refreshToken } from "../controller/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.get('/users',verifyToken('admin'), getUsers);
router.post('/registrasi', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', LogOut);

export default router;