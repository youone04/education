import express from "express";
import { getBelajar } from "../../controller/Belajar/Belajar.js";
const routerBelajar = express.Router();

routerBelajar.get('/belajar/:id' , getBelajar);

export default routerBelajar;
