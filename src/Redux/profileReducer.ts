import {v1} from "uuid";
import {ActionType, ProfilePageType} from "../Types/types";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    postData: [
        {
            id: v1(),
            message: 'Вкусно',
            name: 'Dasha',
            likesCount: 11111,
            src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
        },
        {
            id: v1(),
            message: 'My',
            name: 'Vova',
            likesCount: 12,
            src: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'
        },
        {
            id: v1(),
            message: 'Why ME????',
            name: 'Solyara',
            likesCount: 10,
            src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
        },
        {
            id: v1(),
            message: 'Why',
            name: 'Sova',
            likesCount: 15,
            src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
        },
    ],
    newPostText:'',
}

export const profileReducer =(state:ProfilePageType = initialState, action: ActionType)=>{
    switch (action.type){
        case ADD_POST:
            const newPost ={
                id:v1(),
                message: state.newPostText,
                name: 'LLLLova',
                likesCount: 15,
                src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
            state.postData.push(newPost)
            state.newPostText =''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText =action.newText
            return state

        default: console.log(action.type)
            return state
    }
}

export const addPostAC = ():ActionType=> ({type:ADD_POST})
export const updateNewPostTextAC = (newText:string):ActionType=>({type:UPDATE_NEW_POST_TEXT, newText})