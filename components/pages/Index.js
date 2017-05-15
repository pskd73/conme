import React, { Component } from "react";
import Nav from "../Nav/index";

const styles = {
    container: {
        width: "100%",
        height: window.innerHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginImage: {
        height: "100px"
    }
}

class Index extends Component {
    render() {
        return (
            <div style={styles.container}>
                <a href="/api/login">
                    <img style={styles.loginImage} src="/images/login-google.png"/>
                </a>
            </div>
        );
    }
}

export default Index;
