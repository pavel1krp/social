import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesDataType} from "../../App";
import InputButton from "../Form/Input_Button";
import {DialogDataType} from "../../Redux/State";

type allDialogTypes ={
    dialogsData: DialogDataType[]
    messagesData:MessagesDataType[]
}

type DialogPropsType ={
    dialogState: allDialogTypes
}

const Dialogs = (props:DialogPropsType) => {
    const mapMessages = props.dialogState.messagesData.map(el=> <Message message={el.message}/>)
    const mapDialogs = props.dialogState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    return (
        <>
        <div className ={s.content}>
            <div className={s.dialogs}>
                {mapDialogs}
            </div>
            <div className={s.messages}>
                {mapMessages}
            </div>
        </div>
            <InputButton buttonName={'Send message'}/>
        </>
    );
};

export default Dialogs;