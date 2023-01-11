import {connect} from "react-redux";
import {StatePropsType,  UsersType} from "../../Types/types";
import {
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggle, toggleIsFetching
} from "../../Redux/usersReduser";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

export class UsersApiComponent extends React.Component<usersAllStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            });
    }
    onPageChanged =(pageNumber:number)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=
        ${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        });
    }
    render() {
        return <>
            {this.props.isFetching? <Preloader />:null}
        <Users users={this.props.users}
                      toggle={this.props.toggle}
                      setUsers={this.props.setUsers}
                      totalUserCount={this.props.totalUserCount}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
        />
        </>
    }
}

export type  usersAllStateType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType ={
    users: UsersType[];
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean
}
export type mapDispatchToPropsType ={
    toggle:(userId:string)=>void
    setUsers:(user:UsersType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUserCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}
const mapStateToProps = (state:StatePropsType):mapStateToPropsType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

export const UsersContainer =connect(mapStateToProps, {
    toggle, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching,})(UsersApiComponent)

