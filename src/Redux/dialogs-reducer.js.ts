import React from "react";
import {v1} from "uuid";
import {ActionType, DialogPageType} from "../Types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const dialogReducer = (state:DialogPageType, action:ActionType) =>{
    switch (action.type){
        case ADD_MESSAGE:{
            const body = state.newMessageText
            state.newMessageText = '';
            state.messagesData.push( {id: v1(), message: body})
            return state
        }
        case UPDATE_MESSAGE_TEXT:{
            state.newMessageText = action.messageText
            return state
        }
        default:return state
    }
}

export const addMessageActionCreator = ():ActionType=>({ type: ADD_MESSAGE});
export const updateNewMessageCreator = (messageText:string):ActionType =>({type: UPDATE_MESSAGE_TEXT, messageText});