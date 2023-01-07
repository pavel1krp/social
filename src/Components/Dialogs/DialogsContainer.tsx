import React from 'react';
import {StatePropsType} from "../../Types/types";
import {addMessageAC, updateMessageTextAC} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";

export const mapStateToProps = (state:StatePropsType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogState: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addMessage:()=>{
            dispatch(addMessageAC())
        },
        updateMessage:(newMessage:string)=>{
            dispatch(updateMessageTextAC(newMessage))
        }
    }
}


export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
