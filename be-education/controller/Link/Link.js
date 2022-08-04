import dbs from "../../models/index.js";

export const addLinkKursus = async (req, res, next) => {
  try {
        const {judul , keterangan , link , kursuId} = req.body;
       await dbs.link.create({
            judul,
            keterangan,
            link,
            kursuId
        });
        res.status(200).json({ msg: 'success' })
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
