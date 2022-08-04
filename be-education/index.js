import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import db from './config/Database.js';
import bodyParser from "body-parser";
import helmet from "helmet";
import routerAuth from "./routers/Auth/Auth.js";
import routerKursus from "./routers/Kursus/Kursus.js";
import routerUpload from "./routers/Upload/Upload.js";
import routerUser from "./routers/Users/Users.js";
import dbs from "./models/index.js";

dotenv.config();
const app  = express();
const PORT = process.env.PORT || 8800

try{
    await db.authenticate();
    console.log('Databse Connected....');
    // await dbs.users.sync();
    // await dbs.roles.sync();
    // await dbs.kursus.sync();
    // await dbs.waktu.sync();
    // await dbs.hari.sync();
}catch(error){
    console.log(error)
}
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/pdf", express.static(path.join(__dirname, "public/pdf")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));
app.use('/api' , routerAuth);
app.use('/api', routerKursus);
app.use('/api', routerUpload);
app.use('/api', routerUser);


app.listen(PORT , () => {
    console.log(`Server running at port ${PORT}`)
});
