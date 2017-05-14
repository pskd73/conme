import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    Divider,
    Subheader,
    Avatar,
    Checkbox,
    TextField
} from "material-ui";
import CheckIcon from "material-ui/svg-icons/action/check-circle";
import { toggleFriendsFeed, toggleMyFeed, search } from "../actions/feed";

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
    },
    searchContainer: {
        padding: "5px 15px"
    }
}

class HomeMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    checkForEnter(event) {
        if (event.charCode === 13) {
            this.handleSearch();
        }
    }

    handleSearch() {
        this.props.search(this.state.searchText);
    }

    handleSearchTextChange(event, searchText) {
        this.setState({ searchText });
    }

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
                <Subheader>Search</Subheader>
                <div style={styles.searchContainer}>
                    <TextField
                        value={this.state.searchText}
                        hintText="Anything.."
                        onChange={this.handleSearchTextChange.bind(this)}
                        onKeyPress={this.checkForEnter.bind(this)} />
                </div>
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
    const feed = state.feed;
    return Object.assign({}, feed, {
        avatar: state.auth.avatar
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFriendsFeed: () => {
            dispatch(toggleFriendsFeed());
        },
        toggleMyFeed: () => {
            dispatch(toggleMyFeed());
        },
        search: (text) => {
            dispatch(search(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
