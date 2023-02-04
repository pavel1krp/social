import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, postLikeAC,} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux"
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component<AllPropsProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileTC(this.props.match.params.userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return <Profile profile={this.props.profile}/>
    }

}

type AllPropsProfileContainerType = RouteComponentProps<GetFromRoutType> & PropsProfileContainerType
type MapStateToPropsType = {
    profile: UserProfileType
    status:string
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
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps,{getProfileTC,postLikeAC}),
    withRouter,
    WithAuthRedirect
)
(ProfileContainer)