import actionsFunction from "./generated/TxActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TxApi from "../../api/TxApi";
 
 actionsFunction.loadTxList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TxApi
     .getTxList()
     .then(list => {
       dispatch(actionsFunction.loadTxSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
