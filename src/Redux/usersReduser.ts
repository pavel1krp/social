import {ActionType, UsersDataType, UsersType} from "../Types/types";

export let initialState = {
    users:[],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1
}

export const usersReducer = (state:UsersDataType = initialState, action:ActionType )=>{
    switch (action.type){
        case "TOGGLE":return {...state, users: state.users.map(el=>el.id === action.userId? {...el, followed:!el.followed } :el)}
        case "SET-USERS":return {...state, users: action.users}
        case "SET-CURRENT-PAGE":return {...state, currentPage: action.pageNumber}
        case "SET-TOTAL-USER-COUNT": return {...state, totalUserCount:action.totalCount}
        default: return state
    }
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>
export const setTotalUserCountAC =(totalCount:number)=>({type:"SET-TOTAL-USER-COUNT", totalCount}as const)
export const setCurrentPageAC = (pageNumber:number)=>({type:"SET-CURRENT-PAGE", pageNumber} as const)
export const toggleAc =(userId:string):ActionType=>({type: 'TOGGLE', userId})
export const setUsersAC =(users:UsersType[]) =>({type: "SET-USERS", users})
