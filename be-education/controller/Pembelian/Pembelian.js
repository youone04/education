import dbs from "../../models/index.js";
import { Sequelize } from "sequelize";

// get pembeliam user
export const getPembelian = async (req, res) => {
  try {
    const pembelian = await dbs.pembelian.findAll({
      where: {
        userId: req.params.id,
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

// post pembelian user
export const postPembelian = async (req, res) => {
  try {
    const { userId, kursuId, metodePembayaranId } = req.params;
    const { bukti_pembayaran } = req.body;
    const batch = await dbs.batch.findAll({
      where: {
        kursuId,
      },
      limit: 1,
      order: [["createdAt", "DESC"]],
    });
    await dbs.pembelian.create({
      batch_pembelian: batch[0].batchColum,
      bukti_pembayaran,
      kursuId,
      userId,
      metodePembayaranId,
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
  }
};

// get pembeliam admin
export const getPembelianAdmin = async (req, res) => {
  try {
    const pembelian = await dbs.pembelian.findAll({
      attributes: ["id", "status", "batch_pembelian", "bukti_pembayaran"],
      include: [
        {
          include: [
            {
              attributes: ["name"],
              model: dbs.users,
              as: "user",
            },
          ],
          attributes: ["judul", "gambar", "harga"],
          model: dbs.kursus,
          as: "kursus",
        },
        {
          attributes: ["name", "email"],
          model: dbs.users,
          as: "user",
        },
        {
          attributes: ["nama_metode", "no_pembayaran"],
          model: dbs.metodePembayaran,
          as: "metode_pembayaran",
        },
      ],
      order: [["id", "DESC"]],
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

export const konfirmasiPembayaran = async (req, res) => {
  try {
    await dbs.pembelian.update(
      { status: true },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: "success",
    });
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
export const jumlahPendapatanPerbatch = async (req, res) => {
  try {
    const pendapatan = await dbs.pembelian.findAll({
      attributes: ["id", "batch_pembelian", "status"],
      where: {
        batch_pembelian: req.params.batch,
        status: true,
      },
      include: [
        {
          include: [
            {
              attributes: ["id", "name"],
              model: dbs.users,
              as: "user",
            },
          ],
          attributes: ["id", "judul", "harga"],
          model: dbs.kursus,
          as: "kursus",
        },
      ],
    });
    let totalHarga = 0;
    for (let i = 0; i < pendapatan.length; i++) {
      totalHarga = totalHarga + pendapatan[i].kursus.harga;
    }
    const dataSend = {
      pendapatan,
      totalHarga,
    };
    res.status(200).json(dataSend);
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

export const jumlahPendapatanPerPengajar = async (req, res) => {
  try {
    const pendapatan = await dbs.pembelian.findAll({
      attributes: ["id", "batch_pembelian", "status"],
    //   attributes: [
    //     // include the summed value here
    //     "id", "batch_pembelian", "status",
    //     [Sequelize.fn('SUM', Sequelize.col('kursus.harga')), 'totalHarga']
    //  ],
      where: {
        batch_pembelian: req.params.batch,
        status: true,
        '$kursus.user.id$' : req.params.userId,
      },
      include: [
        {
          attributes: ["id", "judul", "harga"],
          model: dbs.kursus,
          required: true,
          as: "kursus",
          include: [
            {
              attributes: ["id", "name"],
              model: dbs.users,
              required: true,
              as: "user",
            },
          ],
          
        },
      ],
    });
    let totalHarga = 0;
    for (let i = 0; i < pendapatan.length; i++) {
      totalHarga = totalHarga + pendapatan[i].kursus.harga
    }
    const dataSend = {
      pendapatan,
      totalHarga,
    };
    res.status(200).json(dataSend);
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
