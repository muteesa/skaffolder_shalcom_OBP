// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  account: {}
};

// Reducer
export default function AccountEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.UPDATE_CUSTOMER_ACCOUNT_SUCCESS:
      return { ...state, customer_account: action.payload };
    case types.LIST_ACCOUNT_SUCCESS:
      return { ...state, listAccount: action.payload };
    case types.LIST_CUSTOMER_ACCOUNT_SUCCESS:
      return { ...state, listCustomer_account: action.payload };
    case types.CREATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.UPDATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.GET_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.LIST_TX_SUCCESS:
      return { ...state, listTx: action.payload };
     // END REDUCERS
    
    case types.RESET_ACCOUNT:
      state = initialState;
      return state;
    default:
      return state;
  }
}