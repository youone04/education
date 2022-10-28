import multer from 'multer';
import path from "path"; 

const uploadCloudImage = multer({
    storage: multer.diskStorage({
        filename: function (req, file, cb) {
            cb(null, 'Eduction' + "-"+Date.now()+"-" + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
    limits: {
        fileSize: 2014288
    }
  
  }).single('gambar')

export default uploadCloudImage;