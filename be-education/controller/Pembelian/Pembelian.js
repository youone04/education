import dbs from "../../models/index.js";

export const getPembelian = async(req, res) => {
    try{
      const pembelian = await dbs.pembelian.findAll({
        include: [
            {
                model: dbs.users, as: 'user',
            },
            {
            model: dbs.kursus, as: 'kursus',
            include: [{
                model: dbs.link, as : 'link'
              },
              {
                model: dbs.waktu, as : 'waktu'
              },
              {
                model: dbs.hari, as : 'hari'
              },
              {
                model: dbs.batch, as : 'batch',
              },
            ]
          }]
      });
      res.status(200).json(pembelian)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }