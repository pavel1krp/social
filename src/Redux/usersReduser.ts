import {v1} from "uuid";
import {ActionType, UsersDataType, UsersType} from "../Types/types";

export let initialState = {
    users:[
        {id: v1(), fullName: 'Dmitry K.', status:'I am batman', location:{city:'Minsk', county:'Belarus'}, followed: true },
        {id: v1(), fullName: 'Dartonyan T.', status:'I am spider man', location:{city:'Moscow', county:'Russia'}, followed: false },
        {id: v1(), fullName: 'Demian T.', status:'I man', location:{city:'Kiev', county:'Ukraine'}, followed: true },
        {id: v1(), fullName: 'Dementi B.', status:'I man in Black', location:{city:'Kiev', county:'Ukraine'}, followed: true },
    ]
}

export const usersReducer = (state:UsersDataType = initialState, action:ActionType )=>{
    switch (action.type){
        case "TOGGLE":
            return {...state, users:state.users.map(el=>el.id === action.userId? {el, followed:!el.followed } :el)}
        default: return state
    }
}


export const toggleAc =(userId:string):ActionType=>({type: 'TOGGLE', userId})
