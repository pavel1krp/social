import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {postLikeAC, setUserProfileAC} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {withRouter} from "react-router-dom";
import {ReactComponent} from "*.svg";
import {compose} from "redux";


export class ProfileContainer extends  React.Component<MapStateToPropsType & MapDispatchType>{
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

const withUrlDataContainerComponent =  withRouter(ProfileContainer)

export default  compose<React.ComponentType>(connect(mapStateToProps, {setUserProfileAC,postLikeAC})(withUrlDataContainerComponent))
