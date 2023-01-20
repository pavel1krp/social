import {connect} from "react-redux";
import {StatePropsType, UsersType} from "../../Types/types";
import {
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggle, toggleFollowingInProgressAC, ToggleFollowingInProgressAC, toggleIsFetching
} from "../../Redux/usersReduser";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api";

export class UsersApiComponent extends React.Component<usersAllStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount)
            this.props.toggleIsFetching(false)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   toggle={this.props.toggle}
                   setUsers={this.props.setUsers}
                   totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgressAC = {this.props.toggleFollowingInProgressAC}
            />
        </>
    }
}

export type  usersAllStateType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users: UsersType[];
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:any[]
}
export type mapDispatchToPropsType = {
    toggle: (userId: string) => void
    setUsers: (user: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgressAC: (inProgress: boolean,userId:string) => void
}
const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    toggle, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingInProgressAC
})(UsersApiComponent)

