import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";

const appReducer = combineReducers({
    ui,
    auth
});

export default appReducer;
