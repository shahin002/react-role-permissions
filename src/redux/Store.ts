import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default Store;