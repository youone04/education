import dbs from "../../models/index.js";

export const getIteBatch = async(req, res) => {
    try{
      const batch = await dbs.batch.findAll();
      res.status(200).json(batch)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }