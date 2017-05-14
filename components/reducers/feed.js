const feed = (state = {
    isMyFeedEnabled: true,
    isFriendsFeedEnabled: true,
    friends: [{
        name: "Sreedevi",
        avatar: "/images/mascot.jpg"
    }],
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
        case "BROADCAST":
            const newFeed = state.feed.splice(0);
            newFeed.unshift(action.message);
            return Object.assign({}, state, {
                feed: newFeed
            });
        case "LOAD_FEED":
            return Object.assign({}, state, {
                isFeedLoading: true
            });
        case "LOAD_FEED_SUCCESS":
            console.log(action);
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
        default:
            return state;
    }
}

export default feed;
