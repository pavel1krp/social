import {connect} from "react-redux";
import {StatePropsType, UsersDataType, UsersType} from "../../Types/types";
import {Dispatch} from "redux";
import {setUsersAC, toggleAc} from "../../Redux/usersReduser";
import {Users} from "./Users";

export type  usersAllStateType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType ={
    users: UsersType[];
}
export type mapDispatchToPropsType ={
    toggle:(userId:string)=>void
    setUsers:(user:UsersType[])=>void
}
const mapStateToProps = (state:StatePropsType):mapStateToPropsType=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        toggle:(userId:string)=>{
            dispatch(toggleAc(userId))
        },
        setUsers: (user:UsersType[])=>{
            dispatch(setUsersAC(user))
        }
    }
}
export const UsersContainer =connect(mapStateToProps, mapDispatchToProps)(Users)
