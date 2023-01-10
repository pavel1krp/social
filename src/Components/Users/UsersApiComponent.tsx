import React from "react";
import axios from "axios";
import style from "./Users.module.css";
import smallUserAvatar from "../../assets/images/smallUsersAva.png";
import {UsersType} from "../../Types/types";
import {usersAllStateType} from "./UsersContainer";
import {Users} from "./Users";

export class UsersApiComponent extends React.Component<usersAllStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    onPageChanged =(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=
        ${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <Users users={this.props.users}
                      toggle={this.props.toggle}
                      setUsers={this.props.setUsers}
                      totalUserCount={this.props.totalUserCount}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
        />

        // const mappedUsers = this.props.users.map((el: UsersType) => {
        //     const changeFollow = () => {
        //         this.props.toggle(el.id)
        //     }
        //     return <div key={el.id} className={style.usersElement}>
        //         <div className={style.singleUserElement}>
        //             <div><img src={el.photos.small != null ? el.photos.small : smallUserAvatar}
        //                       className={style.userImg} alt=""/></div>
        //             {el.followed ? <button onClick={changeFollow}>Follow</button> :
        //                 <button onClick={changeFollow}>Unfollow</button>}
        //         </div>
        //         <div className={style.userInfo}>
        //             <div className={style.userAbout}>
        //                 <p>{el.name}</p>
        //                 <p>{el.status}</p>
        //             </div>
        //             <div className={style.userAbout}>
        //                 <p>{'el.location.county'}</p>
        //                 <p>{el.id}</p>
        //                 <p>{'el.location.city'}</p>
        //             </div>
        //         </div>
        //     </div>
        //
        // })
        // const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        // const pages = [];
        // for(let i =1 ; i<=pagesCount; i++){
        //     pages.push(i)
        // }
        // const mappedButton = pages.map(el=>{
        //     return <button onClick={()=>this.onPageChanged(el)} className={this.props.currentPage ==el? style.selected: ''} >{el}</button>}
        // )
        //
        // return <div>
        //     <div>
        //         {mappedButton}
        //     </div>
        //     {mappedUsers}
        //     <div className={style.bigButtonDiv}>
        //         <button className={style.bitButton}>Show more</button>
        //     </div>
        // </div>
    }
}