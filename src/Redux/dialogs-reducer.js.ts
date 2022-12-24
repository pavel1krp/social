import React from "react";
import {v1} from "uuid";

import state, {ActionsType, DialogPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogReducer = (state:DialogPageType, action:ActionsType) =>{
    switch (action.type){
        case ADD_MESSAGE:{
            const body = state.newMessageBody
           state.newMessageBody = '';
            state.messagesData.push( {id: v1(), message: body})
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            state.newMessageBody = action.body
            return state
        }
        default:return state
    }
}

export const addMessageActionCreator = ():ActionsType=>({ type: ADD_MESSAGE});
export const updateNewMessageCreator = (body:string):ActionsType =>({type: UPDATE_NEW_MESSAGE_TEXT, body});