import Customer_accountApiGenerated from "./generated/Customer_accountApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Customer_accountApi extends Customer_accountApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Customer_account List
  static getCustomer_accountList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/customer_accounts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Customer_accountApi;