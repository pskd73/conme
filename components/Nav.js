import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { connect } from "react-redux";
import { openSideMenu, closeSideMenu } from "./actions/ui";

class Nav extends Component {
    render() {
        return (
            <AppBar
                title="ConMe"
                onLeftIconButtonTouchTap={this.props.openSideMenu}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSideMenu: () => {
            dispatch(closeSideMenu())
        },
        openSideMenu: () => {
            dispatch(openSideMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
