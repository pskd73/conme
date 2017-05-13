export const toggleFriendsFeed = () => {
    return {
        type: "TOGGLE_FRIENDS_FEED"
    };
};

export const toggleMyFeed = () => {
    return {
        type: "TOGGLE_MY_FEED"
    };
};

export const broadcast = (message) => {
    return {
        type: "BROADCAST",
        message
    };
};

export const loadFeed = (userId) => {
    return {
        type: "LOAD_FEED",
        payload: {
            request: {
                url: "/user"
            }
        }
    };
};
