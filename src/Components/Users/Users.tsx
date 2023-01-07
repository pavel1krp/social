import React from 'react';
import {UsersType} from "../../Types/types";

export type UserPropsType = {
    users: UsersType[]
    toggle: (userId:string)=>void
}

export const Users = (props:UserPropsType) => {
    const {users, toggle, ...restProps} = props
    const mappedUsers = users.map(el=>{
        return(
            <div key={el.id}>{el.fullName} <button onClick={()=>toggle(el.id)}>{el.followed === true? <p>Hello</p>:<p>Bye</p> }</button></div>
        )
    })
    return (
        <div>
            {mappedUsers}
        </div>
    );
};
