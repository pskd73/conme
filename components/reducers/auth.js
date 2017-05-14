const auth = (state = {
    isLoggedIn: false,
    userId: null,
    username: "",
    avatar: "",
    isBootstrapped: false,
    followingIds: [],
    following: []
}, action) => {
    switch (action.type) {
        case "BOOTSTRAP_SUCCESS":
            if (action.payload.data.success) {
                const data = action.payload.data.data;
                const newState = Object.assign({}, state, {});
                if (data.user) {
                    newState.isLoggedIn = true;
                    newState.userId = data.user._id;
                    newState.username = data.user.name;
                    newState.avatar = data.user.avatar;
                    newState.followingIds = data.user.following;
                    newState.following = data.users;
                }
                newState.isBootstrapped = true;
                return newState;
            }
        case "FOLLOW_SUCCESS":
            const ids = state.followingIds.splice(0);
            const response = action.payload.data;
            if (response.success) {
                ids.push(action.payload.data.data.id);
                return Object.assign({}, state, {
                    followingIds: ids
                });
            }
            return state;
        case "UNFOLLOW_SUCCESS":
            const ids_ = state.followingIds.splice(0);
            const response_ = action.payload.data;
            if (response_.success) {
                const id = action.payload.data.data.id;
                ids_.splice(ids_.indexOf(id), 1);
                return Object.assign({}, state, {
                    followingIds: ids_
                });
            }
            return state;
        default:
            return state;
    }
}

export default auth;
