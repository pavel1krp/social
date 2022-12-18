import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagesDataType} from "../../App";
import InputButton from "../Form/Input_Button";
import {DialogDataType} from "../../Redux/State";

type allDialogTypes = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}

type DialogPropsType = {
    dialogState: allDialogTypes
}

const Dialogs = (props: DialogPropsType) => {
    const mapMessages = props.dialogState.messagesData.map(el => <Message message={el.message}/>)
    const mapDialogs = props.dialogState.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)

    const addMessageHandler = () => {

    }

    const newMessageElement = () => {

    }

    const onPostChange = () => {

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
                    <input ref={newMessageElement} className={s.textArea} defaultValue={''}
                              onChange={onPostChange}/>
                <button onClick={addMessageHandler}>Add post</button>

                {/*<InputButton buttonName={'Send message'}/>*/}
            </div>
        </>
    );
};

export default Dialogs;