import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { LinearProgress } from "material-ui";
import Nav from "./Nav/index";
import { bootstrap } from "./actions/auth";

const styles = {
    container: {
        width: "100%",
        height: window.innerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    loader: {
        width: "300px"
    }
}

class Page extends Component {

    constructor(props) {
        super(props);
        props.bootstrap();
    }

    render() {
        return this.props.isBootstrapped
        ?
            <div>
                <Nav/>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        :
            <div style={styles.container}>
                <LinearProgress
                    style={styles.loader}
                    mode="indeterminate" />
            </div>
    }
}

Page.propTypes = {
    isBootstrapped: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return state.auth;
}

const mapDispatchToProps = (dispatch) => {
    return {
        bootstrap: () => {
            dispatch(bootstrap());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
