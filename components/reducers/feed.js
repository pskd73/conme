const feed = (state = {
    isMyFeedEnabled: true,
    isFriendsFeedEnabled: true,
    feed: [],
    isFeedLoading: false,
    isSearchActive: false,
    searchResultPeople: [],
    searchResultPosts: [],
    searchText: ""
}, action) => {
    switch (action.type) {
        case "TOGGLE_FRIENDS_FEED":
            return Object.assign({}, state, {
                isFriendsFeedEnabled: !state.isFriendsFeedEnabled
            });
        case "TOGGLE_MY_FEED":
            return Object.assign({}, state, {
                isMyFeedEnabled: !state.isMyFeedEnabled
            });
        case "BROADCAST_SUCCESS":
            const newFeed = state.feed.splice(0);
            const post = action.payload.data.data.post;
            newFeed.unshift(post);
            return Object.assign({}, state, {
                feed: newFeed
            });
        case "LOAD_FEED":
            return Object.assign({}, state, {
                isFeedLoading: true
            });
        case "LOAD_FEED_SUCCESS":
            const feed = action.payload.data.data;
            return Object.assign({}, state, {
                feed,
                isFeedLoading: false
            });
        case "SEARCH":
            return Object.assign({}, state, {
                isSearchActive: true,
                searchText: action.payload.request.data.text,
                isFeedLoading: true
            });
        case "SEARCH_SUCCESS":
            return Object.assign({}, state, {
                isSearchActive: true,
                isFeedLoading: false,
                searchResultPeople: action.payload.data.data.people,
                searchResultPosts: action.payload.data.data.posts
            });
        case "SEARCH_FAIL":
            return Object.assign({}, state, {
                isSearchActive: false,
                isFeedLoading: false
            });
        case "GOTO_HOME":
            return Object.assign({}, state, {
                isSearchActive: false
            });
        default:
            return state;
    }
}

export default feed;
