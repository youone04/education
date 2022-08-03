import dbs from "../../models/index.js";

export const inputItemKursus = async(req, res) => {
    try{
      const {judul , harga  , deskripsi , hari , waktu , userId , syllabus , 	gambar} = req.body;
      await dbs.kursus.create({
        judul,gambar,harga,deskripsi,hari,waktu,syllabus,userId,
        });
        res.status(200).json({ msg: 'success' });    
    }catch(error){
      res.json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  
  }