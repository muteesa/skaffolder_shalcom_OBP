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
 *  TO CUSTOMIZE APIS IN AccountApiGenerated.js PLEASE EDIT ../AccountApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class AccountApiGenerated {

  static contextUrl = properties.endpoint + "/account";

  // CRUD METHODS

  /**
  * AccountService.create
  *   @description CRUD ACTION create
  *   @param Account obj Object to insert
  *
  */
  static createAccount(account) {
    return axios.post(AccountApiGenerated.contextUrl, account )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * AccountService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Account
  *
  */
  static deleteAccount(id) {
    return axios.delete(AccountApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * AccountService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Account
  *   @returns Account
  *
  */
  static getOneAccount(id) {
    return axios.get(AccountApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * AccountService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Account
  *
  */
  static getAccountList() {
    return axios.get(AccountApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * AccountService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Account
  *   @returns Account
  *
  */
  static saveAccount(account) {
    return axios.post(AccountApiGenerated.contextUrl + "/" + account._id, account )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default AccountApiGenerated;
