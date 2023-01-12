import React, {FC} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {postLikeAC, setUserProfileAC} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchType

type MapStateToPropsType = {
    profile: UserProfileType
}

type PathParamsType ={
    userId:string | undefined
}

type MapDispatchType = {
    setUserProfileAC: (profile: UserProfileType) => void,
    postLikeAC: (id: string) => void
}

type ForRouterType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<ForRouterType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            });
    }

    render() {
        console.log(this.props)
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

export const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}



export default compose<FC>(connect(mapStateToProps, {setUserProfileAC, postLikeAC}), withRouter)(ProfileContainer)
