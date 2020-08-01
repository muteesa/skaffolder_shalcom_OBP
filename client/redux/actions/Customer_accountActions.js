import actionsFunction from "./generated/Customer_accountActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import customer_accountApi from "../../api/customer_accountApi";
 
 actionsFunction.loadcustomer_accountList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return customer_accountApi
     .getcustomer_accountList()
     .then(list => {
       dispatch(actionsFunction.loadcustomer_accountSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
