import {authDataType} from "../Types/types";

const initialState:authDataType =  {
    userId:'',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state:authDataType = initialState, action:authReducer)=>{
    switch (action.type) {
        case "SET-USER-DATA": return {...state, ...action.data, isAuth:true}
        default: return state

    }
}

type authReducer = setAuthUserDataACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId:string, email:string, login:string) =>{
    return ({type: "SET-USER-DATA", data:{ userId,email,login}})
}