import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    Paper,
    TextField,
    RaisedButton,
    FlatButton
} from "material-ui";
import { broadcast } from "../actions/feed";

const styles = {
    container: {
        padding: 5,
        marginBottom: 10,
    },
    footer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        margin: "0px 5px"
    },
    textarea: {
        padding: 10
    }
}

class Broadcaster extends Component {

    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    handleOnChange(event, message) {
        this.setState({ message });
    }

    handleClear() {
        this.setState({ message: "" });
    }

    handleBroadcast() {
        this.props.broadcast({
            author: this.props.username,
            avatar: this.props.avatar,
            time: (new Date()).toString(),
            message: this.state.message
        });
    }

    render() {
        return (
            <Paper style={styles.container} zDepth={1}>
                <div style={styles.textarea}>
                    <TextField
                        hintText={"Broadcast you message here..."}
                        name="message"
                        value={this.state.message}
                        fullWidth={true}
                        multiLine={true}
                        rows={2}
                        rowsMax={2}
                        onChange={this.handleOnChange.bind(this)} />
                </div>
                <div style={styles.footer}>
                    <FlatButton
                        style={styles.button}
                        label="Clear"
                        onTouchTap={this.handleClear.bind(this)} />
                    <RaisedButton
                        style={styles.button}
                        label="Broadcast"
                        primary={true}
                        onTouchTap={this.handleBroadcast.bind(this)} />
                </div>
            </Paper>
        );
    }
}

Broadcaster.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        avatar: state.auth.avatar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        broadcast: (message) => {
            dispatch(broadcast(message));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Broadcaster);
