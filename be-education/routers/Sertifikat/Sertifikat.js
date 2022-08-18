import express from "express";
import { getIdentiasSertifikat } from "../../controller/Sertifikat/Sertifikat.js";
const routerSertfikat = express.Router();

routerSertfikat.get('/sertifikat/:userId/:id', getIdentiasSertifikat);

export default routerSertfikat;