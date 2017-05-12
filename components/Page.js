import React, { Component } from "react";
import Nav from "./Nav";
import SideMenu from "./SideMenu";

class Page extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SideMenu/>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        );
    }
}

export default Page;
