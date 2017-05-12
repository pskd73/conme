const ui = (state = {
    isSideMenuOpen: false
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
        default:
            return state;
    }
}

export default ui;
