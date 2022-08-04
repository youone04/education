import express from "express";
const routerKursus = express.Router();
import { getItemDetailKursus, getItemKursus, inputItemKursus } from "../../controller/kursus/Kursus.js";
import { verifyToken } from "../../middleware/VerifyToken.js";

routerKursus.post('/kursus' , inputItemKursus);
routerKursus.get('/kursus',getItemKursus);
routerKursus.get('/kursus/:id',getItemDetailKursus);

export default routerKursus;