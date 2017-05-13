import React, { Component, PropTypes } from "react";
import { FlatButton } from "material-ui";
import { connect } from "react-redux";
import LoggedInNavMenu from "./LoggedInNavMenu";
import { openLoginDialog } from "../actions/ui";

class RightSection extends Component {

    handleLogin() {
        window.location = "/api/login";
    }

    render() {
        return (
            <div>
                {
                    !this.props.isLoggedIn
                    ?
                        <FlatButton
                            label="Login with Google"
                            className="nav-button"
                            onTouchTap={this.handleLogin.bind(this)} />
                    :
                        <div className="nav-right-container">
                            <span className="nav-label">{this.props.username}</span>
                            <LoggedInNavMenu />
                        </div>
                }
            </div>
        )
    }

}

RightSection.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
}

const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(mapStateToProps, null)(RightSection);
