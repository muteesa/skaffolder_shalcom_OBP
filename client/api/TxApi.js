import TxApiGenerated from "./generated/TxApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TxApi extends TxApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Tx List
  static getTxList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/txs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TxApi;