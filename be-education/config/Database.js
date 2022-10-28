import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// prod
// const db = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PW,{
//     host:process.env.HOST,
//     dialect:process.env.DIALECT,
//     dialectOptions: {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false // <<<<<<< YOU NEED THIS
//         }
//       },
// })

//dev
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PW,{
  host:process.env.HOST,
  dialect:process.env.DIALECT,
})


export default db;