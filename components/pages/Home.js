import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    CircularProgress
} from "material-ui";
import { browserHistory } from "react-router";
import HomeMenu from "../HomeMenu/index";
import FeedContainer from "../FeedContainer";
import Broadcaster from "../Broadcaster/index";
import Search from "../Search/index";
import { loadFeed } from "../actions/feed";

const styles = {
    container: {
        display: "flex",
    },
    menuContainer: {
        flex: 0.25,
        paddingTop: 10,
        borderRight: "1px solid #eee",
    },
    bodyContainer: {
        flex: 0.75,
        padding: 10
    },
    loadingContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

class Home extends Component {

    constructor(props) {
        super(props);
        this.props.loadFeed();
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            browserHistory.push("/");
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.menuContainer}>
                    <HomeMenu />
                </div>
                <div style={styles.bodyContainer}>
                    <Broadcaster />
                    {
                        this.props.isFeedLoading
                        ?
                            <div style={styles.loadingContainer}>
                                <CircularProgress size={80} thickness={5} />
                            </div>
                        :
                        this.props.isSearchActive
                        ?
                            <Search />
                        : <FeedContainer />
                    }
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    isFeedLoading: PropTypes.bool.isRequired,
    isSearchActive: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isFeedLoading: state.feed.isFeedLoading,
        isSearchActive: state.feed.isSearchActive,
        isLoggedIn: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadFeed: () => {
            dispatch(loadFeed());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
