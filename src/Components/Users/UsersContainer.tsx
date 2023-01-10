import {connect} from "react-redux";
import {StatePropsType, UsersDataType, UsersType} from "../../Types/types";
import {Dispatch} from "redux";
import {
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleAc
} from "../../Redux/usersReduser";
import { UsersApiComponent} from "./UsersApiComponent";

export type  usersAllStateType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType ={
    users: UsersType[];
    pageSize:number
    totalUserCount:number
    currentPage:number
}
export type mapDispatchToPropsType ={
    toggle:(userId:string)=>void
    setUsers:(user:UsersType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUserCount:(totalCount:number)=>void
}
const mapStateToProps = (state:StatePropsType):mapStateToPropsType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        toggle:(userId:string)=>{
            dispatch(toggleAc(userId))
        },
        setUsers: (user:UsersType[])=>{
            dispatch(setUsersAC(user))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount:(totalCount:number)=>{
            dispatch(setTotalUserCountAC(totalCount))
        },
    }
}
export const UsersContainer =connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)
