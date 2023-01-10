import React from 'react';
import {UsersType} from "../../Types/types";
import style from './Users.module.css'
import axios from 'axios';
import smallUserAvatar from '../../assets/images/smallUsersAva.png'

export type UserPropsType = {
    users: UsersType[]
    pageSize:number
    totalUserCount:number
    currentPage:number
    toggle: (userId: string) => void
    setUsers: (user: UsersType[]) => void
    onPageChanged:(x:number)=>void
}

export const Users = (props: UserPropsType) => {
    const {users, toggle, setUsers, ...restProps} = props
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            setUsers(response.data.items)
        })
    }
    const mappedUsers = users.map(el => {
        const changeFollow = () => {
            toggle(el.id)
        }
        return (
            <div key={el.id} className={style.usersElement}>
                <div className={style.singleUserElement}>
                    <div><img src={el.photos.small != null? el.photos.small :smallUserAvatar} className={style.userImg}  alt=""/></div>
                    {el.followed ? <button onClick={changeFollow}>Follow</button> :
                        <button onClick={changeFollow}>Unfollow</button>}
                </div>
                <div className={style.userInfo}>
                    <div className={style.userAbout}>
                        <p>{el.name}</p>
                        <p>{el.status}</p>
                    </div>
                    <div className={style.userAbout}>
                        <p>{'el.location.county'}</p>
                        <p>{'el.location.city'}</p>
                    </div>
                </div>
            </div>
        )
    })
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = [];
    for(let i =1 ; i<=pagesCount; i++){
        pages.push(i)
    }
    const mappedButton = pages.map(el=>{
        return <button onClick={()=>props.onPageChanged(el)} className={props.currentPage ==el? style.selected: ''} >{el}</button>}
    )
    return <div>
        <div>
            {mappedButton}
        </div>
        {mappedUsers}
        <div className={style.bigButtonDiv}>
            <button className={style.bitButton}>Show more</button>
        </div>
    </div>
};
