const ui = (state = {
    isSideMenuOpen: false,
    isLoginDialogOpen: false,
}, action) => {
    switch (action.type) {
        case "OPEN_SIDE_MENU":
            return Object.assign({}, state, {
                isSideMenuOpen: true
            });
        case "CLOSE_SIDE_MENU":
            return Object.assign({}, state, {
                isSideMenuOpen: false
            });
        case "OPEN_LOGIN_DIALOG":
            return Object.assign({}, state, {
                isLoginDialogOpen: true
            });
        case "CLOSE_LOGIN_DIALOG":
            return Object.assign({}, state, {
                isLoginDialogOpen: false
            });
        default:
            return state;
    }
}

export default ui;
