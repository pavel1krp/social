import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, postLikeAC,} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<AllPropsProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileTC(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile profile={this.props.profile}/>
    }

}

type AllPropsProfileContainerType = RouteComponentProps<GetFromRoutType> & PropsProfileContainerType
type MapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}
type GetFromRoutType = {
    userId: string
}
type MapDispatchType = {
    postLikeAC: (id: string) => void
    getProfileTC: (id: string) => any
}
type PropsProfileContainerType = MapStateToPropsType & MapDispatchType
const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default compose<FC>(connect(mapStateToProps, {postLikeAC, getProfileTC}), withRouter)(ProfileContainer)

