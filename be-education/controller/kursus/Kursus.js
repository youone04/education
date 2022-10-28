import dbs from "../../models/index.js";

export const inputItemKursus = async(req, res) => {
    try{
      const {judul , harga  , deskripsi , userId , syllabus ,gambar , jadwal} =await req.body;
      const kursus = await dbs.kursus.create({
        judul,gambar,harga,deskripsi,syllabus,userId,
        });

      await dbs.batch.create({
        batchColum : "B1",
        kursuId :kursus.dataValues.id
      })

      let count=0;
      for(let i=0; i<jadwal.length; i++){
        await dbs.jadwal.create({
          waktu:jadwal[i].waktu,hari:jadwal[i].hari,kursuId :kursus.dataValues.id,
        });
      count++
      }

      if(count === jadwal.length) return res.status(200).json({ message: 'success' });    
    }catch(error){
      console.log(error)
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const getItemKursus = async(req, res) => {
    try{
      const kursus = await dbs.kursus.findAll({
        include: ["jadwal","link","batch"],
      });
      res.status(200).json(kursus)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }
  export const getItemDetailKursus = async(req, res) => {
    try{
      const detailKursus = await dbs.kursus.findOne({
        where: {
          id: req.params.id,
        },
        include: ["jadwal","link","batch"],
      });
      res.status(200).json(detailKursus)

    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const getItemKursusPublic = async(req, res) => {
    try{
      const kursus = await dbs.kursus.findAll({
        attributes: ['id' ,'judul','gambar','harga','deskripsi']
      });
      res.status(200).json(kursus)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const getItemDetailKursusPublic = async(req, res) => {
    try{
      const detailKursus = await dbs.kursus.findOne({
        attributes: ['id' ,'judul','gambar','harga','deskripsi',"syllabus"],
        where: {
          id: req.params.id,
        },
        include: [{
          attributes: ["id" ,"waktu","hari"],
          model: dbs.jadwal,
          as: "jadwal"
        },{
          attributes: ["id","batchColum"],
          model: dbs.batch,
          as: "batch"
        }],
      });
      res.status(200).json(detailKursus)

    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }