import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import feed from "./feed";

const appReducer = combineReducers({
    ui,
    auth,
    feed
});

export default appReducer;
