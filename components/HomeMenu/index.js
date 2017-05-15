import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    Divider,
    Subheader,
    Avatar,
    Checkbox,
    TextField,
    MenuItem
} from "material-ui";
import CheckIcon from "material-ui/svg-icons/action/check-circle";
import { toggleFriendsFeed, toggleMyFeed, search } from "../actions/feed";
import { gotoHome } from "../actions/ui";

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

    handleHome() {
        this.props.gotoHome();
    }

    render() {
        return (
            <div>
                <div style={styles.profileImageContainer}>
                    <img style={styles.profileImage} src={this.props.avatar} />
                </div>
                <Subheader>Links</Subheader>
                <List>
                    <MenuItem
                        onTouchTap={this.handleHome.bind(this)}
                        primaryText="Home" />
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
                <Subheader>Following</Subheader>
                <List>
                    {
                        this.props.following.map((friend, index) => (
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
    following: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    const following = state.auth.following.map((user) => {
        return {
            name: user.name,
            avatar: user.avatar
        };
    });
    return {
        following,
        avatar: state.auth.avatar
    };
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
        },
        gotoHome: () => {
            dispatch(gotoHome());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
