import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StatePropsType} from "../../Types/types";
import {Dispatch} from "redux";
import {toggleAc} from "../../Redux/usersReduser";

const mapStateToProps = (state:StatePropsType)=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggle:(userId:string)=>{
            dispatch(toggleAc(userId))
        }
    }
}
export const UsersContainer =connect(mapStateToProps, mapDispatchToProps)(Users)
