import dbs from "../../models/index.js";

export const getPembelian = async (req, res) => {
  try {
    const pembelian = await dbs.pembelian.findAll({
      where: {
        userId: req.params.id
      },
      include: [
        // {
        //   model: dbs.users,
        //   as: "user",
        //   attributes : ['id','name' , 'email']
        // },
        {
          model: dbs.kursus,
          as: "kursus",
          // include: [
          //   {
          //     model: dbs.link,
          //     as: "link",
          //   },
          // ],
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
