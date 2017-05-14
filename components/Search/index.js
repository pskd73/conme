import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    Subheader,
    List,
    ListItem,
    Avatar,
    IconMenu,
    MenuItem,
    IconButton
} from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FeedCard, { FeedType } from "../FeedCard/index";
import { follow, unfollow } from "../actions/feed";

const styles = {
    header: {
        fontSize: "large"
    }
};

const iconButtonElement = (
  <IconButton>
    <MoreVertIcon />
  </IconButton>
);

class Search extends Component {

    handleFollow(id) {
        this.props.follow(id);
    }

    handleUnfollow(id) {
        this.props.unfollow(id);
    }

    render() {
        return (
            <div>
                <span style={styles.header}>Search results for "{this.props.searchText}"</span>
                <Subheader>People</Subheader>
                <List>
                    {
                        this.props.searchResultPeople.length
                        ?
                            this.props.searchResultPeople.map((person, index) => (
                                <ListItem
                                    key={index}
                                    primaryText={person.username}
                                    leftAvatar={<Avatar src={person.avatar} />}
                                    rightIconButton={
                                        person.id != this.props.userId
                                        ?
                                            <IconMenu iconButtonElement={iconButtonElement}>
                                                {
                                                    this.props.followingIds.indexOf(person.id) !== -1
                                                    ? <MenuItem
                                                        onTouchTap={this.handleUnfollow.bind(this, person.id)}
                                                        >Unfollow</MenuItem>
                                                    : <MenuItem
                                                        onTouchTap={this.handleFollow.bind(this, person.id)}
                                                        >Follow</MenuItem>
                                                }
                                            </IconMenu>
                                        : null
                                    }
                                    />
                            ))
                        :
                            <div style={{padding: "0px 15px"}}>Oops!! No results</div>
                    }
                </List>
                <Subheader>Posts</Subheader>
                {
                    this.props.searchResultPosts.length
                    ?
                        this.props.searchResultPosts.map((post, index) => (
                            <FeedCard
                                key={index}
                                {...post} />
                        ))
                    :
                        <div style={{padding: "0px 15px"}}>Oops!! No results</div>
                }
            </div>
        )
    }

}

Search.propTypes = {
    searchText: PropTypes.string.isRequired,
    searchResultPeople: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    searchResultPosts: PropTypes.arrayOf(PropTypes.shape(FeedType)).isRequired,
    followingIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    userId: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    const people = state.feed.searchResultPeople.map((person) => {
        return {
            username: person.name,
            avatar: person.avatar,
            id: person._id
        };
    });
    const posts = state.feed.searchResultPosts.map((post) => {
        return {
            author: post.author.name,
            time: post.created_at,
            avatar: post.author.avatar,
            message: post.message
        };
    });
    return {
        searchText: state.feed.searchText,
        searchResultPeople: people,
        searchResultPosts: posts,
        followingIds: state.auth.followingIds,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id));
        },
        unfollow: (id) => {
            dispatch(unfollow(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
