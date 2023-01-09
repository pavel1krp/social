import React from "react";
import axios from "axios";
import style from "./Users.module.css";
import smallUserAvatar from "../../assets/images/smallUsersAva.png";
import {UsersType} from "../../Types/types";

export class Users extends React.Component<any> {
    getUsers = () =>
    {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        const mappedUsers = this.props.users.map((el:UsersType) => {
            const changeFollow = () => {
                this.props.toggle(el.id)
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
                            <p>{el.id}</p>
                            <p>{'el.location.city'}</p>
                        </div>
                    </div>
                </div>
            )
        })
        console.log(this.props)
        return<div>
            <button onClick={this.getUsers}>Get Users</button>
            {mappedUsers}
            <div className={style.bigButtonDiv}><button className={style.bitButton}>Show more</button></div>
        </div>
    }
}