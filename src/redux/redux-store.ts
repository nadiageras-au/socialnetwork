import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
})

export let store = createStore(rootReducer)
// @ts-ignore
window.store = store;