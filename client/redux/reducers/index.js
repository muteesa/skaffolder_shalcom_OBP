import { combineReducers } from "redux";

// START IMPORT REDUCERS
import AccountEditReducer from "./AccountEditReducer";
import HomeReducer from "./HomeReducer";
import UserEditReducer from "./UserEditReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	AccountEditReducer,
	HomeReducer,
	UserEditReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
