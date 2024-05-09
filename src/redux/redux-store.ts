import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";
import {usersPageReducer} from "./usersPage-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
// @ts-ignore
window.store = store;