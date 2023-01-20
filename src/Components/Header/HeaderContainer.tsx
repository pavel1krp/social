import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {StatePropsType} from "../../Types/types";


class HeaderContainer extends React.Component<PropsHeaderContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true,
            headers:{
                "API-KEY": '1d84894c-5c25-4929-957d-5a81bfbf3d58'
            }
        })
            .then(response =>{
                if(response.data.resultCode ===0){
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />
    }
}
type PropsHeaderContainerType = MapDispatchType & MapStateToPropsType
type  MapDispatchType = {
    setAuthUserDataAC:(id:string, email:string, login:string)=>void
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
export default connect(mapStateToProps,{setAuthUserDataAC})(HeaderContainer) ;