import {v1} from "uuid";
import { MessagesDataType} from "../App";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
export type postDatapropsType = {
    id: string
    message: string
    name: string
    likesCount: number
    src: string
}
export type DialogPageType = {
    dialogsData:DialogDataType[]
    messagesData:MessagesDataType[]
    newMessageText:string
}
export type DialogDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    postData: postDatapropsType[],
    newPostText: string
}

export type SideBarType = {}
export type StatePropsType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: StatePropsType
    _callSubscriber:(state: StatePropsType)=>void
    getState:()=> StatePropsType
    subscribe:(observer:(state: StatePropsType)=>void)=>void
    dispatch:(action:ActionType)=>void
}

type AddPostActionType = {
    type: "ADD-POST"
}
type UPDATE_NEW_POST_TEXT ={
    type: "UPDATE-NEW-POST-TEXT",
    newText:string
}
type UPDATE_MESSAGE_TEXT ={
    type: "UPDATE-MESSAGE-TEXT",
    messageText:string
}
type ADD_MESSAGE ={
    type: "ADD-MESSAGE",
}

export type ActionType = AddPostActionType| UPDATE_NEW_POST_TEXT|
    UPDATE_MESSAGE_TEXT| ADD_MESSAGE



export const store:StoreType = {
    _state:{
        profilePage: {
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
        },
        dialogPage: {
            dialogsData: [
                {id: v1(), name: 'Pasha'},
                {id: v1(), name: 'Dasha'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Masha'},
                {id: v1(), name: 'Nasha'},
                {id: v1(), name: 'Glasha'},
                {id: v1(), name: 'Gosha'},
            ],
            messagesData: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Hi chel'},
                {id: v1(), message: 'Hi body'},
                {id: v1(), message: 'Hi bye'},
                {id: v1(), message: 'Hiushki'},
                {id: v1(), message: 'Bye'},
            ],
            newMessageText: '',
        },
        sideBar:{}
    },
    _callSubscriber (state: StatePropsType){
        console.dir('state')
    },
    getState(){
        return this._state
    },
    subscribe(observer:(state: StatePropsType)=>void){
         this._callSubscriber= observer
    },
    dispatch(action:ActionType){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    }
}
