import AccountApiGenerated from "./generated/AccountApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AccountApi extends AccountApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Account List
  static getAccountList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/accounts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AccountApi;