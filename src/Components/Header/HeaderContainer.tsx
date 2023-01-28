import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authTC, setAuthUserDataAC} from "../../Redux/auth-reducer";
import {StatePropsType} from "../../Types/types";


class HeaderContainer extends React.Component<PropsHeaderContainerType>{
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />
    }
}
type PropsHeaderContainerType = MapDispatchType & MapStateToPropsType
type  MapDispatchType = {
    setAuthUserDataAC:(id:string, email:string, login:string)=>void
    authTC:()=>any
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
const mapStateToProps = (state:StatePropsType):MapStateToPropsType=>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps,{setAuthUserDataAC,authTC})(HeaderContainer) ;