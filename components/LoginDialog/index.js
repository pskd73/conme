import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog } from "material-ui";
import { closeLoginDialog } from "../actions/ui";

class LoginDialog extends Component {

    render() {
        return (
            <Dialog
                title="Login"
                open={this.props.isLoginDialogOpen}
                onRequestClose={this.props.closeLoginDialog}
                >

                <span>Login section</span>
            </Dialog>
        )
    }

}

LoginDialog.propTypes = {
    isLoginDialogOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return state.ui;
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeLoginDialog: () => {
            dispatch(closeLoginDialog());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
