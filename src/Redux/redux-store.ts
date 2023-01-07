import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReduser";

const reducers = combineReducers({
   profilePage:profileReducer ,
   dialogPage:dialogReducer ,
   sideBar: sideBarReducer,
   usersPage:usersReducer,
})

export const store = createStore(reducers);