import actionsFunction from "./generated/AccountActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AccountApi from "../../api/AccountApi";
 
 actionsFunction.loadAccountList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AccountApi
     .getAccountList()
     .then(list => {
       dispatch(actionsFunction.loadAccountSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
