import express from "express";
import { 
    getPembelian ,
    getPembelianAdmin,
    jumlahPendapatanPerbatch,
    jumlahPendapatanPerPengajar,
    konfirmasiPembayaran,postPembelian 
} from "../../controller/Pembelian/Pembelian.js";
const routerPembelian = express.Router();

routerPembelian.get('/pembelian/:id', getPembelian);
routerPembelian.post('/pembelian/:userId/:kursuId/:metodePembayaranId', postPembelian);
routerPembelian.get('/pembelian-admin', getPembelianAdmin);
routerPembelian.put('/pembelian-admin/:id', konfirmasiPembayaran);
routerPembelian.get('/pendapatan-batch/:batch', jumlahPendapatanPerbatch);
routerPembelian.get('/pendapatan-pengajar/:userId/:batch', jumlahPendapatanPerPengajar);

export default routerPembelian;