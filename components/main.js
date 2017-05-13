import React from "react";
import ReactDOM from "react-dom";
import {
    Router,
    Route,
    IndexRoute,
    hashHistory,
    browserHistory
} from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import App from "./App";
import Index from "./pages/Index";
import Home from "./pages/Home";
import appReducer from "./reducers";
import Api from "./Api";

let store = createStore(
    appReducer,
    applyMiddleware(
        axiosMiddleware(Api)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="home" component={Home} />
            </Route>
        </Router>
    </Provider>,
document.getElementById("app"));
