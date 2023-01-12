import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {postLikeAC, setUserProfileAC} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";


export class ProfileApiContainer extends  React.Component<MapStateToPropsType & MapDispatchType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/22`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            });
    }

    render() {
        return (
            <Profile  profile={this.props.profile} />
        )
    }
}
type MapDispatchType = {
    setUserProfileAC:(profile:any)=>void,
}
type MapStateToPropsType = {
    profile:UserProfileType
}
export const mapStateToProps = (state:StatePropsType) => {
 return{
     profile: state.profilePage.profile
 }
}

export const ProfileContainer =  connect(mapStateToProps, {setUserProfileAC,postLikeAC})(ProfileApiContainer)
