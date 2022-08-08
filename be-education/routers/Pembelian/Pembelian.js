import express from "express";
import { getPembelian ,postPembelian } from "../../controller/Pembelian/Pembelian.js";
const routerPembelian = express.Router();

routerPembelian.get('/pembelian/:id', getPembelian);
routerPembelian.post('/pembelian/:userId/:kursuId', postPembelian);

export default routerPembelian;