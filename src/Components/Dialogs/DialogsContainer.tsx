import React from 'react';
import {StatePropsType} from "../../Types/types";
import {addMessageAC, updateMessageTextAC} from "../../Redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";

export const mapStateToProps = (state:StatePropsType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogState: state.dialogPage,
        isAuth: state.auth.isAuth,
    }
}
export const DialogsContainer = connect(mapStateToProps,{updateMessageTextAC,addMessageAC})(Dialogs)
