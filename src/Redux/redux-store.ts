import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sideBarReducer} from "./sideBarReducer";

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   sideBar:sideBarReducer
})

export const store = createStore(reducers);