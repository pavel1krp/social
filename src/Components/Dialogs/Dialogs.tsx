import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesDataType} from "../../App";

import {ActionsType, DialogDataType, } from "../../Redux/store";
import {addMessageActionCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer.js";

type allDialogTypes = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}

type DialogPropsType = {
    dialogState: allDialogTypes
    newMessageBody:string
    dispatch: (action:ActionsType) => void
}

const Dialogs = (props: DialogPropsType) => {
    const mapMessages = props.dialogState.messagesData.map(el => <Message message={el.message}/>)
    const mapDialogs = props.dialogState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let newMessageBody = props.newMessageBody

    const onSendMessageClick = ()=>{
        props.dispatch(addMessageActionCreator())
    }
    const onSendMessageChange = (e:ChangeEvent<HTMLInputElement>)=>{
        props.dispatch(updateNewMessageCreator(e.currentTarget.value))
    }
    return (
        <>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {mapDialogs}
                </div>
                <div className={s.messages}>
                    {mapMessages}
                </div>
            </div>
            <div className={s.formDiv}>
                    <input  className={s.textArea} value={props.newMessageBody}
                              onChange={onSendMessageChange}/>
                <button onClick={onSendMessageClick}>Add post</button>

                {/*<InputButton buttonName={'Send message'}/>*/}
            </div>
        </>
    );
};

export default Dialogs;