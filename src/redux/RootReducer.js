import {combineReducers} from "redux";
import AuthReducer from "./admin-dashboard/auth/AuthReducer";
import UserReducer from "./admin-dashboard/users/UserReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
});

export default RootReducer;