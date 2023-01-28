import {ActionType, authDataType} from "../Types/types";
import {Dispatch} from "redux";
import {usersAPI} from "../api";

const initialState:authDataType =  {
    userId:'',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state:authDataType = initialState, action:authReducersType)=>{
    switch (action.type) {
        case "SET-USER-DATA": return {...state, ...action.data, isAuth:true}
        default: return state

    }
}

type authReducersType = setAuthUserDataACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId:string, email:string, login:string) =>{
    return ({type: "SET-USER-DATA", data:{ userId,email,login}})
}

export const authTC = ()=>{
    return(dispatch:Dispatch<authReducersType>)=>{
        usersAPI.authMe()
            .then(response =>{
                if(response.data.resultCode ===0){
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}