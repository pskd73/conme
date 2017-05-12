import React, { Component } from "react";
import Nav from "./Nav/index";
import SideMenu from "./SideMenu";
import LoginDialog from "./LoginDialog/index";

class Page extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SideMenu/>
                <LoginDialog/>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        );
    }
}

export default Page;
