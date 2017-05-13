const feed = (state = {
    avatar: "/images/mascot.jpg",
    isMyFeedEnabled: true,
    isFriendsFeedEnabled: true,
    friends: [{
        name: "Sreedevi",
        avatar: "/images/mascot.jpg"
    }],
    feed: [],
    isFeedLoading: false
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
            const feed = action.payload.data.data;
            return Object.assign({}, state, {
                feed,
                isFeedLoading: false
            });
        default:
            return state;
    }
}

export default feed;
