import React, { Component } from "react";
import {
    Router,
    Route,
    IndexRoute,
    hashHistory,
    browserHistory
} from "react-router";
import Index from "./pages/index";
import Home from "./pages/home";
import injectTapEventPlugin from "react-tap-event-plugin";

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Index} />
                <Route path="/home" component={Home} />
            </Router>
        );
    }

}

injectTapEventPlugin();

export default App;
