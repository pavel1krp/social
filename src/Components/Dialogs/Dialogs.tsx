import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogItemPropsType ={
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) =>{
    return (
        <div className={s.dialogsItem + ' ' + s.active} >
            <NavLink key={props.id} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string,
}

const Message = (props: MessageType) =>{
    return <div
        className={s.message}>{props.message}
    </div>
}

const Dialogs = (props: any) => {

    let dialogsData =[
        {id:1, name:'Pasha'},
        {id:2, name:'Dasha'},
        {id:3, name:'Sasha'},
        {id:4, name:'Masha'},
        {id:5, name:'Nasha'},
        {id:6, name:'Glasha'},
        {id:7, name:'Gosha'},
    ]

    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'Hi chel'},
        {id:3, message: 'Hi body'},
        {id:4, message: 'Hi bye'},
        {id:5, message: 'Hiushki'},
        {id:6, message: 'Bye'},
    ]

    return (
        <div className ={s.content}>
            <div className={s.dialogs}>
                {dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>
                )}
            </div>
            <div className={s.messages}>
                {messagesData.map(el=> <Message message={el.message}/>
                )}
            </div>
        </div>
    );
};

export default Dialogs;