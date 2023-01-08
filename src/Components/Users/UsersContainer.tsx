import {connect} from "react-redux";
import {Users} from "./Users";
import {StatePropsType, UsersType} from "../../Types/types";
import {Dispatch} from "redux";
import {setUsersAC, toggleAc} from "../../Redux/usersReduser";

const mapStateToProps = (state:StatePropsType)=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
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
