import express from "express";
import { getIteBatch } from "../../controller/Batch/Batch.js";
const routerBatch = express.Router();

routerBatch.get('/batch' , getIteBatch);

export default routerBatch;

