import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton label="My Button" />
            </MuiThemeProvider>
        );
    }

}

injectTapEventPlugin();

export default App;
