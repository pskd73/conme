const auth = (state = {
    isLoggedIn: false,
    userId: null,
    username: "",
    avatar: "",
    isBootstrapped: false
}, action) => {
    switch (action.type) {
        case "BOOTSTRAP_SUCCESS":
            if (action.payload.data.success) {
                const data = action.payload.data;
                const newState = Object.assign({}, state, {});
                if (data.user) {
                    newState.isLoggedIn = true;
                    newState.userId = data.user._id;
                    newState.username = data.name;
                    newState.avatar = data.avatar;
                }
                newState.isBootstrapped = true;
                return newState;
            }
        default:
            return state;
    }
}

export default auth;
