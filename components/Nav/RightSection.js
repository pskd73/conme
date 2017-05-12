import React, { Component, PropTypes } from "react";
import { FlatButton } from "material-ui";
import { connect } from "react-redux";
import LoggedInNavMenu from "./LoggedInNavMenu";
import { openLoginDialog } from "../actions/ui";

class RightSection extends Component {

    render() {
        return (
            <div>
                {
                    !this.props.isLoggedIn
                    ?
                        <FlatButton
                            label="Login"
                            className="nav-button"
                            onTouchTap={this.props.openLoginDialog} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        openLoginDialog: () => {
            dispatch(openLoginDialog());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSection);
