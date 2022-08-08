import express from "express";
const routerUpload = express.Router();
import { uploadFilePdf , uploadImage } from "../../controller/Upload/Upload.js";
import uploadPDF from "../../middleware/uploadFilePdf.js";
import uploadImages from "../../middleware/uploadImage.js";

routerUpload.post('/upload-image',uploadImages , uploadImage);
routerUpload.post('/upload-pdf', uploadPDF , uploadFilePdf);

export default routerUpload;