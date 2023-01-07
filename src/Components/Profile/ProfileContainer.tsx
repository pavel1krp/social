import React from 'react';
import {StatePropsType} from "../../Types/types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Profile from "./Profile";

export const mapStateToProps = (state:StatePropsType) => {
    return {
       post:state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {

    }
}


export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile)
