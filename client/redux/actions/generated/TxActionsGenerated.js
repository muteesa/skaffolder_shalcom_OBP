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
 *  TO CUSTOMIZE FUNCTIONS IN TxActionsGenerated.js PLEASE EDIT ../TxActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import TxApi from "../../../api/TxApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_TX };
  },

  //CRUD METHODS

  // Create tx
  createTx: function(tx) {
    return function(dispatch) {
      return TxApi
        .createTx(tx)
        .then(tx => {
          dispatch(actionsFunction.createTxSuccess(tx));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createTxSuccess: function(tx) {
    return { type: types.CREATE_TX_SUCCESS, payload: tx };
  },


  // Delete tx
  deleteTx: function(id) {
    return function(dispatch) {
      return TxApi
        .deleteTx(id)
        .then(tx => {
          dispatch(actionsFunction.deleteTxSuccess(tx));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteTxSuccess: function(tx) {
    return { type: types.DELETE_TX_SUCCESS, payload: tx };
  },


  // Find by account_id
  findByaccount_id: function(key) {
    return function(dispatch) {
      return TxApi
        .findByaccount_id(key)
        .then(item => {
          dispatch(actionsFunction.findByaccount_idSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByaccount_idSuccess: function(item) {
    return { type: types.FINDBYACCOUNT_ID_TX_SUCCESS, payload: item };
  },


  // Get tx
  loadTx: function(id) {
    return function(dispatch) {
      return TxApi
        .getOneTx(id)
        .then(tx => {
          dispatch(actionsFunction.loadTxSuccess(tx));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadTxSuccess: function(tx) {
    return { type: types.GET_TX_SUCCESS, payload: tx };
  },

  // Load  list
  loadTxList: function() {
    return function(dispatch) {
      return TxApi
        .getTxList()
        .then(list => {
          dispatch(actionsFunction.loadTxListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadTxListSuccess: function(list) {
    return { type: types.LIST_TX_SUCCESS, payload: list };
  },

	
  // Save tx
  saveTx: function(tx) {
    return function(dispatch) {
      return TxApi
        .saveTx(tx)
        .then(tx => {
          dispatch(actionsFunction.saveTxSuccess(tx));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveTxSuccess: function(tx) {
    return { type: types.UPDATE_TX_SUCCESS, payload: tx };
  },


};

export default actionsFunction;
