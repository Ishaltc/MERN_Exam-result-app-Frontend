import { adminReducer } from "./adminReducers"
import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

const rootReducer = combineReducers({
    admin:adminReducer,
    user:userReducer
});

export default rootReducer