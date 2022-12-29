import {ActionType, DialogPageType} from "./Store";
import {v1} from "uuid";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profileReducer";

export const ADD_MESSAGE = "ADD-MESSAGE"
export const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

let initialState ={
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
}

export const dialogReducer =(state:DialogPageType = initialState, action: ActionType)=>{
    switch (action.type){
        case ADD_MESSAGE:
            const newMessage = {
                id:v1(),
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = '';
            return  state

        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state

        default: return state
    }
}

export const addMessageAC = ():ActionType=> ({type:ADD_MESSAGE})
export const updateMessageTextAC = (messageText:string):ActionType=>({type:UPDATE_MESSAGE_TEXT, messageText})