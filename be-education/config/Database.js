import { Sequelize } from "sequelize";

const db = new Sequelize('db_education','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db;