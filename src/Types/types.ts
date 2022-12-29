import {MessagesDataType} from "../App";

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
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UPDATE_NEW_POST_TEXT ={
    type: "UPDATE-NEW-POST-TEXT",
    newText:string
}
export type UPDATE_MESSAGE_TEXT ={
    type: "UPDATE-MESSAGE-TEXT",
    messageText:string
}
export type ADD_MESSAGE ={
    type: "ADD-MESSAGE",
}
export type ActionType = AddPostActionType| UPDATE_NEW_POST_TEXT|UPDATE_MESSAGE_TEXT| ADD_MESSAGE