import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import {
    Subheader,
    List,
    ListItem,
    Avatar
} from "material-ui";
import FeedCard, { FeedType } from "../FeedCard/index";

const styles = {
    header: {
        fontSize: "large"
    }
};

class Search extends Component {

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
                                    leftAvatar={<Avatar src={person.avatar} />}/>
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
    searchResultPosts: PropTypes.arrayOf(PropTypes.shape(FeedType)).isRequired
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
        console.log(post);
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
        searchResultPosts: posts
    }
}

export default connect(mapStateToProps, null)(Search);
