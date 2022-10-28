import cloud from "../../middleware/imageCloud.js";

export const uploadImage = (req , res) => {
    try{
      if(!req.file) return res.status(500).json({message: 'Upload gagal, pastikan ukuran dan extensi file sesuai format!'})
      return res.status(200).json("File uploded successfully");
    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }
  
  export const uploadImageCloud = async(req , res) => {
    try{
      if(!req.file) return res.status(400).json({message: 'Upload gagal, pastikan ukuran dan extensi file sesuai format!'});

     const hasil =  new Promise((resolve , rejects) => {
        cloud.uploader.upload(`${req.file.path}`,{public_id: `file_item/gambar/${req.file.filename}`,
        unique_filename:false,
        overwrite: true}, async(err ,result) => {
          if(err) rejects(err);
          resolve(result.url);
        })
      })

      let data = await hasil;
      return res.status(200).json({
        message : "File uploded successfully",
        data: data
      });

    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  } 

  export const uploadPdfCloud = async(req , res) => {
    try{
      if(!req.file) return res.status(400).json({message: 'Upload gagal, pastikan ukuran dan extensi file sesuai format!'});

     const hasil =  new Promise((resolve , rejects) => {
        cloud.uploader.upload(req.file.path,{public_id: `file_item/pdf/${req.file.filename}`,
        unique_filename:false,
        overwrite: true}, async(err ,result) => {
          if(err) rejects(err);
          resolve(result.url);
        })
      })

      let data = await hasil;
      return res.status(200).json({
        message : "File uploded successfully",
        data: data
      });
   

    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  } 


  export const uploadFilePdf = (req , res) => {
    try{
      if(!req.file) return res.status(500).json({message: 'Upload gagal, pastikan ukuran dan extensi file sesuai format!'})
      return res.status(200).json("File uploded successfully");
    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const uploadImagePembayaran = (req , res) => {
    try{
      if(!req.file) return res.status(500).json({message: 'Upload gagal, pastikan ukuran dan extensi file sesuai format!'})
      return res.status(200).json("File uploded successfully");
    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }