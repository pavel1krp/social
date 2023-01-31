import React from 'react';
import {StatePropsType} from "../../Types/types";
import {addMessageAC, updateMessageTextAC} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export const mapStateToProps = (state:StatePropsType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogState: state.dialogPage,
        isAuth: state.auth.isAuth,
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
export const  DialogsContainer =WithAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs))
