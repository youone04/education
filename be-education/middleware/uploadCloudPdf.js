import multer from 'multer';

const uploadCloudPdf = multer({
    storage: multer.diskStorage({
        filename: function (req, file, cb) {
            cb(null, 'Eduction' + "-"+Date.now()+"-" + file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        if((file.mimetype).includes('pdf')){
            cb(null, true);
        } else{
            cb(null, false);
        }
      cb(null, true);
    },
    limits: {
        fileSize: 2014288
    }
  
  }).single('pdf')

export default uploadCloudPdf;