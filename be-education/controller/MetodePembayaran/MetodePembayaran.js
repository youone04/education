import dbs from "../../models/index.js";

export const getMetodePembayarab = async (req, res) => {
  try {
    const metodePembayaran = await dbs.metodePembayaran.findAll(); 
    res.status(200).json(metodePembayaran);
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