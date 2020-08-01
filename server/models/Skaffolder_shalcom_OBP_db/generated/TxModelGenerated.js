/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE TxModelGenerated.js PLEASE EDIT ../TxModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Skaffolder_shalcom_OBP_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * TxModel.create
  *   @description CRUD ACTION create
  *   @param Tx obj Object to insert
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Tx.create(item);    return result;
  },
  
  /**
  * TxModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Tx
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Tx.destroy({ where: { _id: id } });
  },
  
  /**
  * TxModel.findByaccount_id
  *   @description CRUD ACTION findByaccount_id
  *   @param Objectid key Id of the resource account_id to search
  *
  */
  async findByaccount_id(key) {
    return await Database.getConnection().models.Tx.findAll({ where: { "account_id": key } });
  },
  
  /**
  * TxModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Tx
  *   @returns Tx
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Tx.findByPk(id);
    return result;
  },
  
  /**
  * TxModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Tx
  *
  */
  async list() { 
    return await Database.getConnection().models.Tx.findAll();
      },
  
  /**
  * TxModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Tx
  *   @returns Tx
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Tx.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;