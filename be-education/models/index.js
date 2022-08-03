import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import KursusModels from "./KursusModels.js";
import RolesModels2 from "./RolesModels2.js";
import UserModels2 from "./UserModels2.js";

const dbs = {};
dbs.Sequelize = Sequelize;
dbs.sequelize = db;
dbs.roles =  RolesModels2(db, Sequelize);
dbs.users =  UserModels2(db, Sequelize);
dbs.kursus = KursusModels(db , Sequelize);

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

export default dbs;