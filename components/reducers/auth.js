const auth = (state = {
    isLoggedIn: true,
    userId: null,
    username: "Pramod Kumar",
    avatar: "/images/mascot.jpg",
}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default auth;
