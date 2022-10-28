import express from "express";
const routerUpload = express.Router();
import { uploadFilePdf, uploadImage, uploadImageCloud, uploadImagePembayaran, uploadPdfCloud } from "../../controller/Upload/Upload.js";
import uploadCloudImage from "../../middleware/uploadCloudImage.js";
import uploadCloudPdf from "../../middleware/uploadCloudPdf.js";
import uploadPDF from "../../middleware/uploadFilePdf.js";
import uploadImages from "../../middleware/uploadImage.js";
import uploadImagesPembayaran from "../../middleware/uploadImagePembayaran.js";

routerUpload.post('/upload-image',uploadImages , uploadImage);
routerUpload.post('/upload-image-cloud',uploadCloudImage, uploadImageCloud);
routerUpload.post('/upload-pdf', uploadPDF,uploadFilePdf);
routerUpload.post('/upload-pdf-cloud', uploadCloudPdf , uploadPdfCloud);
routerUpload.post('/upload-pembayaran', uploadImagesPembayaran , uploadImagePembayaran);

export default routerUpload;