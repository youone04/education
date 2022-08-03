import express from "express";
const routerKursus = express.Router();
import { inputItemKursus } from "../../controller/kursus/Kursus.js";

routerKursus.post('/kursus' , inputItemKursus);
export default routerKursus;