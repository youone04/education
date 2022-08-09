import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import BatchModels from "./BatchModels.js";
import HariModels from "./HariModels.js";
import KursusModels from "./KursusModels.js";
import LinkKursusModels from "./LinkKursusModels.js";
import MetodePembayaran from "./MetodePembayaran.js";
import PembelianModels from "./PembelianModels.js";
import RolesModels2 from "./RolesModels2.js";
import UserModels2 from "./UserModels2.js";
import WaktuModels from "./WaktuModels.js";


const dbs = {};
dbs.Sequelize = Sequelize;
dbs.sequelize = db;
dbs.roles =  RolesModels2(db, Sequelize);
dbs.users =  UserModels2(db, Sequelize);
dbs.kursus = KursusModels(db , Sequelize);
dbs.waktu = WaktuModels(db , Sequelize);
dbs.hari = HariModels(db , Sequelize);
dbs.link = LinkKursusModels(db , Sequelize);
dbs.batch = BatchModels(db , Sequelize);
dbs.pembelian = PembelianModels(db , Sequelize);
dbs.metodePembayaran = MetodePembayaran(db , Sequelize);

// relational roles and users
dbs.users.hasMany(dbs.roles, { as: "roles" });
dbs.roles.belongsTo(dbs.users, {
  foreignKey: "userId",
  as: "user",
});

// relational kursus and users
dbs.users.hasMany(dbs.kursus, { as: "kursus" });
dbs.kursus.belongsTo(dbs.users, {
  foreignKey: "userId",
  as: "user",
});

//relational waktu and kursus
dbs.kursus.hasMany(dbs.waktu, { as: "waktu" });
dbs.waktu.belongsTo(dbs.kursus, {
  foreignKey: "kursuId",
  as: "kursus",
});

//relational hari and kursus
dbs.kursus.hasMany(dbs.hari, {as: "hari"});
dbs.hari.belongsTo(dbs.kursus , {
  foreignKey: "kursuId",
  as: "kursus"
});

//relational link and kursus
dbs.kursus.hasMany(dbs.link , {as : 'link'});
dbs.link.belongsTo(dbs.kursus , {
  foreignKey: "kursuId",
  as: "kursus",
});

// relational batch and kursus
dbs.kursus.hasMany(dbs.batch , {as : 'batch'});
dbs.batch.belongsTo(dbs.kursus , {
  foreignKey: "kursuId",
  as: "kursus",
});

//relational link and batch
dbs.batch.hasMany(dbs.link , {as : 'link'});
dbs.link.belongsTo(dbs.batch , {
  foreignKey: "batchId",
  as: "batch",
});

//relation pembelian and kursus
dbs.kursus.hasMany(dbs.pembelian , {as : 'pembelian'});
dbs.pembelian.belongsTo(dbs.kursus , {
  foreignKey: "kursuId",
  as: "kursus",
});

//relational user and pembelian
dbs.users.hasMany(dbs.pembelian, { as: "pembelian" });
dbs.pembelian.belongsTo(dbs.users, {
  foreignKey: "userId",
  as: "user",
});

//relational metode pembayaran and pembelian
dbs.metodePembayaran.hasMany(dbs.pembelian, { as: "pembelian" });
dbs.pembelian.belongsTo(dbs.metodePembayaran, {
  foreignKey: "metodePembayaranId",
  as: "metode_pembayaran",
});

export default dbs;