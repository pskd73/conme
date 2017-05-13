import React, { Component } from "react";
import HomeMenu from "../HomeMenu/index";
import FeedContainer from "../FeedContainer";
import Broadcaster from "../Broadcaster/index";

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
    }
};

class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.menuContainer}>
                    <HomeMenu />
                </div>
                <div style={styles.bodyContainer}>
                    <Broadcaster />
                    <FeedContainer />
                </div>
            </div>
        );
    }
}

export default Home;
