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
 *  TO CUSTOMIZE TxControllerGenerated.js PLEASE EDIT ../TxController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import TxModel from "../../../models/Skaffolder_shalcom_OBP_db/TxModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TxController from "../TxController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/tx`;
    router.post(baseUrl + "", authorize([]), TxController.create);
    router.delete(baseUrl + "/:id", authorize([]), TxController.delete);
    router.get(baseUrl + "/findByaccount_id/:key", authorize([]), TxController.findByaccount_id);
    router.get(baseUrl + "/:id", authorize([]), TxController.get);
    router.get(baseUrl + "", authorize([]), TxController.list);
    router.post(baseUrl + "/:id", authorize([]), TxController.update);
  },


  // CRUD METHODS


  /**
  * TxModel.create
  *   @description CRUD ACTION create
  *   @param Tx obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await TxModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TxModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Tx
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TxModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TxModel.findByaccount_id
  *   @description CRUD ACTION findByaccount_id
  *   @param Objectid key Id of the resource account_id to search
  *
  */
  findByaccount_id: async (req, res) => {
    try {
      const result = await TxModel.findByaccount_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TxModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Tx
  *   @returns Tx
  *
  */
  get: async (req, res) => {
    try {
      const result = await TxModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TxModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Tx
  *
  */
  list: async (req, res) => {
    try {
      const result = await TxModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * TxModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Tx
  *   @returns Tx
  *
  */
  update: async (req, res) => {
    try {
      const result = await TxModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
