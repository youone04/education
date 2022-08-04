import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import HariModels from "./HariModels.js";
import KursusModels from "./KursusModels.js";
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
})

export default dbs;