import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType ={
    name: string,
    id: string
}

const DialogItem = (props: DialogItemPropsType) =>{
    return (
        <div className={s.dialogsItem + ' ' + s.active} >
            <NavLink key={props.id} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;