import React, { Component } from "react";
import { connect } from "react-redux";
import { IconMenu, MenuItem, IconButton } from "material-ui";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

class LoggedInNavMenu extends Component {

    handleLogout() {
        window.location = "/api/logout";
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: "left", vertical: "top"}}
                targetOrigin={{horizontal: "left", vertical: "top"}}
                iconStyle={{color: "#fff"}} >

                <MenuItem primaryText="Settings" />
                <MenuItem
                    primaryText="Sign out"
                    onTouchTap={this.handleLogout.bind(this)} />

            </IconMenu>
        )
    }

}

export default LoggedInNavMenu;
