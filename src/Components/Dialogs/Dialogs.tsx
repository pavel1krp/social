import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogDataType, MessagesDataType, postDatapropsType} from "../../App";

type DialogPropsType ={
    dialogsData: DialogDataType[]
        messagesData:MessagesDataType[]
}

const Dialogs = (props:DialogPropsType) => {
    const mapMessages = props.messagesData.map(el=> <Message message={el.message}/>)
    const mapDialogs = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    return (
        <div className ={s.content}>
            <div className={s.dialogs}>
                {mapDialogs}
            </div>
            <div className={s.messages}>
                {mapMessages}
            </div>
        </div>
    );
};

export default Dialogs;