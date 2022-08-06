import dbs from "../../models/index.js";

export const addLinkKursus = async (req, res) => {
  try {
    const { judul, keterangan, link ,kursuId} = req.body;
    const batch =  await dbs.batch.findAll({
      where:{
        kursuId
      },
      limit: 1,
      order: [ [ 'createdAt', 'DESC' ]]
    });
    await dbs.link.create({
      judul,
      keterangan,
      link,
      kursuId,
      batchId: batch[0].id
    });
    res.status(200).json({ message: "success" });
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
