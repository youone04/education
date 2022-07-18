import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('user',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
},
{
    freezeTableName: true
});

const Role = db.define('role',{
    role: {
        type: DataTypes.STRING
    }
    
},
{
    freezeTableName: true
});


User.hasMany(Role, { as: "roles" });
Role.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
  });


export {User , Role} ;