import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import FeedCard, { FeedType } from "./FeedCard/index";

const styles = {
    container: {
        marginBottom: 10
    }
}

class FeedContainer extends Component {
    render() {
        return (
            <div>
            {
                this.props.feeds.map((feed, index) => (
                    <div style={styles.container} key={index}>
                        <FeedCard {...feed}/>
                    </div>
                ))
            }
            </div>
        );
    }
}

FeedContainer.propTypes = {
    feeds: PropTypes.arrayOf(PropTypes.shape(FeedType))
};

const mapStateToProps = (state) => {
    return state.feed;
}

export default connect(mapStateToProps, null)(FeedContainer);
