
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