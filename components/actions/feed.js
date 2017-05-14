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
                url: "/feed"
            }
        }
    };
};

export const search = (text) => {
    return {
        type: "SEARCH",
        payload: {
            request: {
                url: "/search",
                method: "post",
                data: { text }
            }
        }
    };
};

export const follow = (id) => {
    return {
        type: "FOLLOW",
        payload: {
            request: {
                url: "/follow",
                method: "post",
                data: { id }
            }
        }
    };
};

export const unfollow = (id) => {
    return {
        type: "UNFOLLOW",
        payload: {
            request: {
                url: "/unfollow",
                method: "post",
                data: { id }
            }
        }
    };
};
