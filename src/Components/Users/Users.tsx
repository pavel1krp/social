import React from 'react';
import {UsersType} from "../../Types/types";
import style from './Users.module.css'
import {v1} from "uuid";

export type UserPropsType = {
    users: UsersType[]
    toggle: (userId: string) => void
    setUsers: (user: UsersType[]) => void
}

export const Users = (props: UserPropsType) => {
    const {users, toggle, setUsers, ...restProps} = props
    if (users.length === 0) {
        setUsers([{
                id: v1(),
                urlPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg',
                fullName: 'Dmitry K.',
                status: 'I am batman',
                location: {city: 'Minsk', county: 'Belarus'},
                followed: true
            },
            {
                id: v1(),
                urlPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg',
                fullName: 'Dartonyan T.',
                status: 'I am spider man',
                location: {city: 'Moscow', county: 'Russia'},
                followed: false
            },
            {
                id: v1(),
                urlPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg',
                fullName: 'Demian T.',
                status: 'I man',
                location: {city: 'Kiev', county: 'Ukraine'},
                followed: true
            },
            {
                id: v1(),
                urlPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg',
                fullName: 'Dementi B.',
                status: 'I man in Black',
                location: {city: 'Kiev', county: 'Ukraine'},
                followed: true
            }]
        )
    }
    const mappedUsers = users.map(el => {
        const changeFollow = () => {
            toggle(el.id)
        }
        return (
            <div key={el.id} className={style.usersElement}>
                <div className={style.singleUserElement}>
                    <div><img className={style.userImg} src={el.urlPhoto} alt=""/></div>
                    {el.followed ? <button onClick={changeFollow}>Follow</button> :
                        <button onClick={changeFollow}>Unfollow</button>}
                </div>
                <div className={style.userInfo}>
                    <div className={style.userAbout}>
                        <p>{el.fullName}</p>
                        <p>{el.status}</p>
                    </div>
                    <div className={style.userAbout}>
                        <p>{el.location.county}</p>
                        <p>{el.location.city}</p>
                    </div>
                </div>
            </div>
        )
    })
    console.log(users)
    return (
        <div className={style.usersWrapper}>
            {mappedUsers}
            <div className={style.bigButtonDiv}><button className={style.bitButton}>Show more</button></div>

        </div>
    );
};
