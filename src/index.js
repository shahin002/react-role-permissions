import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import Store from "./redux/Store";
import HttpsRedirect from "react-https-redirect";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={Store}>
        <HttpsRedirect>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HttpsRedirect>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
