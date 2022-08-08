import dbs from "../../models/index.js";

export const getPembelian = async (req, res) => {
  try {
    const pembelian = await dbs.pembelian.findAll({
      where: {
        userId: req.params.id
      },
      include: [
        {
          model: dbs.kursus,
          as: "kursus",
        },
      ],
    }); 
    res.status(200).json(pembelian);
  } catch (error) {
    res
      .status(500)
      .json(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
  }
};

export const postPembelian  = async (req, res) => {
  try{
    const {userId ,kursuId} = req.params;
    const {jadwal_hari , jadwal_waktu} = req.body;
    const batch =  await dbs.batch.findAll({
      where:{
        kursuId
      },
      limit: 1,
      order: [ [ 'createdAt', 'DESC' ]]
    });
    await dbs.pembelian.create({
      kursuId,
      userId,
      batch_pembelian: batch[0].batchColum,
      jadwal_waktu,
      jadwal_hari
    });
    res.status(200).json({ message: "success" });

  }catch(error){
    res
      .status(500)
      .json(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
  }
}
