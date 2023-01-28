import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, postLikeAC, setUserProfileAC} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {json} from "stream/consumers";

class ProfileContainer extends React.Component<AllPropsProfileContainerType>{
    componentDidMount() {
       this.props.getProfileTC(this.props.match.params.userId)
    }

    render () {
        return <Profile profile={this.props.profile} />
    }

}
type AllPropsProfileContainerType = RouteComponentProps<GetFromRoutType> & PropsProfileContainerType
type MapStateToPropsType ={
    profile:UserProfileType
}
type GetFromRoutType = {
    userId:string
}
type MapDispatchType = {
    postLikeAC:(id:string)=>void
    setUserProfileAC:(profile:UserProfileType)=>void
    getProfileTC:(id:string)=>any
}
type PropsProfileContainerType= MapStateToPropsType & MapDispatchType
 const mapStateToProps =(state:StatePropsType):MapStateToPropsType=>{
    return{
        profile: state.profilePage.profile
    }
 }

 export default compose<FC>(connect(mapStateToProps, {postLikeAC,setUserProfileAC,getProfileTC}),withRouter)(ProfileContainer)

