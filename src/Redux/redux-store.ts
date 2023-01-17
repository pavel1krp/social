import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

export const store = createStore(reducers);

//@ts-ignore
window.store = store