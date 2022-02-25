import {combineReducers} from "redux";
import AuthReducer from "./admin-dashboard/auth/AuthReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
});

export default RootReducer;