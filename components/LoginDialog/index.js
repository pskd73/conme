import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog, RaisedButton } from "material-ui";
import { closeLoginDialog } from "../actions/ui";

const styles = {
    loginImage: {
        height: 50
    },
    buttonStyle: {
        height: "auto"
    }
};

class LoginDialog extends Component {

    render() {
        return (
            <Dialog
                title="Login with Google"
                open={this.props.isLoginDialogOpen}
                onRequestClose={this.props.closeLoginDialog}
                >
                <RaisedButton
                    buttonStyle={styles.buttonStyle}
                    children={
                        <div>
                            <img
                                style={styles.loginImage}
                                src="/images/google-signin.png" />
                        </div>
                    } />
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
