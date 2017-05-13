import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    Divider,
    Subheader,
    Avatar,
    Checkbox
} from "material-ui";
import CheckIcon from "material-ui/svg-icons/action/check-circle";
import { toggleFriendsFeed, toggleMyFeed } from "../actions/feed";

const styles = {
    profileImageContainer: {
        width: "100%",
        textAlign: "right"
    },
    profileImage: {
        maxWidth: "90%"
    },
    subheader: {
        fontFamily: "Roboto, sans-serif"
    }
}

class HomeMenu extends Component {

    render() {
        return (
            <div>
                <div style={styles.profileImageContainer}>
                    <img style={styles.profileImage} src={this.props.avatar} />
                </div>
                <Subheader>Filters</Subheader>
                <List>
                    <ListItem
                        primaryText="Friends Feed"
                        leftCheckbox={<Checkbox checked={this.props.isFriendsFeedEnabled} onCheck={this.props.toggleFriendsFeed} />} />
                    <ListItem
                        primaryText="My Feed"
                        leftCheckbox={<Checkbox checked={this.props.isMyFeedEnabled} onCheck={this.props.toggleMyFeed} />} />
                </List>
                <Divider />
                <Subheader>Friends</Subheader>
                <List>
                    {
                        this.props.friends.map((friend, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={<Avatar src={friend.avatar} />}
                                primaryText={friend.name} />
                        ))
                    }
                </List>
            </div>
        )
    }

}

HomeMenu.propTypes = {
    avatar: PropTypes.string.isRequired,
    isMyFeedEnabled: PropTypes.bool.isRequired,
    isFriendsFeedEnabled: PropTypes.bool.isRequired,
    friends: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return state.feed;
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFriendsFeed: () => {
            dispatch(toggleFriendsFeed());
        },
        toggleMyFeed: () => {
            dispatch(toggleMyFeed());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
