import {applyMiddleware, compose, createStore} from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = new createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default Store;