import express from "express";
const routerUpload = express.Router();
import { uploadFilePdf , uploadImage, uploadImagePembayaran } from "../../controller/Upload/Upload.js";
import uploadPDF from "../../middleware/uploadFilePdf.js";
import uploadImages from "../../middleware/uploadImage.js";
import uploadImagesPembayaran from "../../middleware/uploadImagePembayaran.js";

routerUpload.post('/upload-image',uploadImages , uploadImage);
routerUpload.post('/upload-pdf', uploadPDF , uploadFilePdf);
routerUpload.post('/upload-pembayaran', uploadImagesPembayaran , uploadImagePembayaran);

export default routerUpload;