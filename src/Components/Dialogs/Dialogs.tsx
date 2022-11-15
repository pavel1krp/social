import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: string) =>{
    return (
        <div className={s.dialogsItem + ' ' + s.active} >
            <NavLink to='/dialogs/1'>Pasha</NavLink>
        </div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className ={s.content}>
            <div className={s.dialogs}>
                <DialogItem name ="Pasha" id ="1"/>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/2'>Dasha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/4'>Masha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/5'>Nyasha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/6'>Glasha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/7'>Kasha</NavLink>
                </div>
                <div className={s.dialogsItem}>
                    <NavLink to='/dialogs/8'>Susha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bye</div>
                <div className={s.message}>ni</div>
            </div>
        </div>
    );
};

export default Dialogs;