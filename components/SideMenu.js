import React, { Component, PropTypes } from "react";
import {
    Drawer,
    MenuItem
} from "material-ui";
import { connect } from "react-redux";
import { openSideMenu, closeSideMenu } from "./actions/ui";

class SideMenu extends Component {

    onRequestChange(open, reason) {
        if (open) {
            this.props.open();
        } else {
            this.props.close();
        }
    }

    render() {
        return (
            <Drawer
                open={this.props.isSideMenuOpen}
                docked={false}
                onRequestChange={this.onRequestChange.bind(this)}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
        )
    }

}

SideMenu.propTypes = {
    isSideMenuOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return state.ui;
}

const mapDispatchToProps = (dispatch) => {
    return {
        open: () => {
            dispatch(openSideMenu());
        },
        close: () => {
            dispatch(closeSideMenu());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
