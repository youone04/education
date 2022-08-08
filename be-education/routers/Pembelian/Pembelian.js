import express from "express";
import { getPembelian } from "../../controller/Pembelian/Pembelian.js";
const routerPembelian = express.Router();

routerPembelian.get('/pembelian/:id', getPembelian);
export default routerPembelian;