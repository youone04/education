import express from "express";
const routerKursus = express.Router();
import { getItemDetailKursus, getItemDetailKursusPublic, getItemKursus, getItemKursusPublic, inputItemKursus } from "../../controller/kursus/Kursus.js";
import { verifyToken } from "../../middleware/VerifyToken.js";

routerKursus.post('/kursus' , inputItemKursus);
routerKursus.get('/kursus',getItemKursus);
routerKursus.get('/kursus/:id',getItemDetailKursus);
routerKursus.get('/kursus-public',getItemKursusPublic);
routerKursus.get('/kursus-public/:id',getItemDetailKursusPublic);



export default routerKursus;