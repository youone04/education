import dbs from "../../models/index.js";

export const getAllroles = async(req, res) => {
    try{
      const roles = await dbs.roles.findAll({
        attributes: ["role"],
      });
    
      const hasil = {};
      roles.forEach((w) => {
        hasil[w.role] = w.role;
      });
  
      res.status(200).json(hasil)
    }catch(error){
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  }

  export const getUsers = async (req, res) => {
    try {
      const users = await dbs.users.findAll({
        attributes: ["id", "name", "email"],
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.response && error.response.data.message
        ? error.response.data.message
        : error.message)
    }
  };