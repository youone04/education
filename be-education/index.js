import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import db from './config/Database.js';
import {User , Role} from "./models/UserModels.js";
import router from "./routers/index.js";
dotenv.config();
const app  = express();
const PORT = process.env.PORT || 8800

try{
    await db.authenticate();
    console.log('Databse Connected....');
    // await User.sync();//otomatis membuat table jika table tidak ada dalam database
    // await Role.sync()
}catch(error){
    console.log(error)
}
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'));
app.use(router);

app.listen(PORT , () => {
    console.log(`Server running at port ${PORT}`)
});
