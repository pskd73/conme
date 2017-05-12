import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Page from "./Page";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Page {...this.props}/>
            </MuiThemeProvider>
        );
    }

}

injectTapEventPlugin();

export default App;
