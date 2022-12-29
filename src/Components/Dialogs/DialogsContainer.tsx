import React from 'react';
import Dialogs, {allDialogTypes} from "./Dialogs";
import {ActionType} from "../../Types/types";
import {addMessageAC, updateMessageTextAC} from "../../Redux/dialogReducer";

type DialogsContainerPropsType ={
    dialogState: allDialogTypes
    dispatch:(action:ActionType)=>void
    newMessageText: string
}

const DialogsContainer = (props:DialogsContainerPropsType) => {
    const addMessageHandler = ()=>{
        props.dispatch(addMessageAC())
    }
    const updateMessageText = (newMessage:string)=>{
        props.dispatch(updateMessageTextAC(newMessage))
    }
    return (
        <Dialogs dialogState={props.dialogState} addMessage={addMessageHandler} updateMessage={updateMessageText} newMessageText={props.newMessageText}/>
    )

}

export default DialogsContainer;