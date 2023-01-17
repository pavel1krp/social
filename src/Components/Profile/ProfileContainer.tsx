import React, {FC} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {postLikeAC, setUserProfileAC} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {json} from "stream/consumers";

class ProfileContainer extends React.Component<AllPropsProfileContainerType>{
    componentDidMount() {
        let userid = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid? userid:2}`).then(response=>
            this.props.setUserProfileAC(response.data)
        )
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
}
type PropsProfileContainerType= MapStateToPropsType & MapDispatchType
 const mapStateToProps =(state:StatePropsType):MapStateToPropsType=>{
    return{
        profile: state.profilePage.profile
    }
 }

 export default compose<FC>(connect(mapStateToProps, {postLikeAC,setUserProfileAC}),withRouter)(ProfileContainer)

