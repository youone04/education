import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/pembayaran');
    },
    filename: function (req, file, cb) {
        cb(null, 'pembayaran' + "--" + file.originalname);
    }
});  

const fileFilter = (req, file, cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        cb(null, true);
    } else{
        cb(null, false);
    }

};
const maxSize = 2014288; //2mb
let uploadImagesPembayaran = multer({ storage: storage, fileFilter: fileFilter , limits: {fileSize : maxSize} }).single("gambar");
export default uploadImagesPembayaran;