import dbs from "../../models/index.js";

export const getIdentiasSertifikat = async (req, res) => {
  try {
    const belajar = await dbs.pembelian.findOne({
      attributes: [],
      where: {
        userId: req.params.userId,
        id: req.params.id,
      },
      include: [
        {
          attributes: ["judul"],
          model: dbs.kursus,
          as: "kursus"
        },
        {
            attributes: ["name"],
            model: dbs.users,
            as: "user"
          },
      ],
    });

      res.status(200).json(belajar);
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