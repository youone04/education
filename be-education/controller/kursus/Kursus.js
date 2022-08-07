import dbs from "../../models/index.js";

export const inputItemKursus = async(req, res) => {
    try{
      const {judul , harga  , deskripsi , userId , syllabus , 	gambar , waktu , hari} =await req.body;
      const kursus = await dbs.kursus.create({
        judul,gambar,harga,deskripsi,syllabus,userId,
        });

      for(let i=0; i<hari.length; i++){
        await dbs.hari.create({
          hari: hari[i].hari, kursuId :kursus.dataValues.id,
        });
      }
      let count=0;
      for(let i=0; i<waktu.length; i++){
        await dbs.waktu.create({
          waktu:waktu[i].waktu,kursuId :kursus.dataValues.id,
        });
      count++
      }

      if(count === waktu.length) return res.status(200).json({ message: 'success' });    
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const getItemKursus = async(req, res) => {
    try{
      const kursus = await dbs.kursus.findAll({
        include: ["waktu","hari" ,"link","batch"],
      });
      res.status(200).json(kursus)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  // Posts.findAll({
  //   where: {name: "Sunshine"},
  //   include: [{
  //     model: User,
  //     where: {year_birth: 1984}
  //    }]
  // }).then(posts => {
  //   /* ... */
  // });
  export const getItemDetailKursus = async(req, res) => {
    try{
      const detailKursus = await dbs.kursus.findOne({
        where: {
          id: req.params.id,
        },
        include: ["waktu","hari" ,"link","batch"],
      });
      res.status(200).json(detailKursus)

    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }