import express from "express";
import { getMetodePembayarab } from "../../controller/MetodePembayaran/MetodePembayaran.js";

const routerMetodePembayaran = express.Router();

routerMetodePembayaran.get('/metode-pembayaran', getMetodePembayarab);
export default routerMetodePembayaran;