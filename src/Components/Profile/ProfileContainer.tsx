import React, {FC} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, postLikeAC,} from "../../Redux/profileReducer";
import {StatePropsType, UserProfileType} from "../../Types/types";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component<AllPropsProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileTC(this.props.match.params.userId)
    }

    render() {

        return <Profile profile={this.props.profile}/>
    }

}

type AllPropsProfileContainerType = RouteComponentProps<GetFromRoutType> & PropsProfileContainerType
type MapStateToPropsType = {
    profile: UserProfileType
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
    }
}

export default WithAuthRedirect(compose<FC>(connect(mapStateToProps, {postLikeAC, getProfileTC}), withRouter)(ProfileContainer))

