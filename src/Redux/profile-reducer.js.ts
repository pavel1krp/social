import {v1} from "uuid";
import {ActionType, ProfilePageType} from "../Types/types";

const ADD_POSt = "ADD-POST";
const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT";

export const profileReducer = (state:ProfilePageType, action:ActionType) =>{
    switch (action.type){
        case ADD_POSt :{
            let newPost = {
                id: v1(),
                message: state.newPostText,
                name: 'LLIova',
                likesCount: 0,
                src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT:{
            state.newPostText = action.newText
            return state
        }
        default:return state
    }
}
export const addPostActionCreator = ():ActionType=>({ type:ADD_POSt});
export const onPostChangeActionCreator = (newText:string):ActionType=>({type:UPDATE_NEW_POST_TEXT , newText});