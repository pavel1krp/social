import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesDataType} from "../../App";
import {
    ActionType,
    addMessageAC,
    DialogDataType,
    updateMessageTextAC
} from "../../Redux/State";


type allDialogTypes ={
    dialogsData: DialogDataType[]
    messagesData:MessagesDataType[]
}

type DialogPropsType ={
    dialogState: allDialogTypes
    dispatch:(action:ActionType)=>void
    newMessageText:string
}

const Dialogs = (props:DialogPropsType) => {
    const mapMessages = props.dialogState.messagesData.map(el=> <Message message={el.message}/>)
    const mapDialogs = props.dialogState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const onMessageChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
    }
    const onClickHandler = ()=>{
        props.dispatch(addMessageAC())
    }
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
            <div className={s.formDiv}>
                <input onChange={onMessageChangeHandler} className={s.sendInput} value={props.newMessageText} type="text"/>
                <button className={s.sendButton} onClick={onClickHandler}>Send message</button>
            </div>

        </>
    );
};

export default Dialogs;