import {ActionType, UsersDataType, UsersType} from "../Types/types";
import {usersAPI} from "../api";
import {Dispatch} from "redux";

export let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.pageNumber}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUserCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.inProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingInProgressAC = ReturnType<typeof toggleFollowingInProgressAC>
export type SetUsersType = ReturnType<typeof setUsers>

export const toggleFollowingInProgressAC = (inProgress: boolean, userId: string) => ({type: 'TOGGLE-FOLLOWING-PROGRESS', inProgress, userId} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const setTotalUserCount = (totalCount: number) => ({type: "SET-TOTAL-USER-COUNT", totalCount} as const)
export const setCurrentPage = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", pageNumber} as const)
export const toggle = (userId: string): ActionType => ({type: 'TOGGLE', userId} as const)
export const setUsers = (users: UsersType[]) => ({type: "SET-USERS", users} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<ActionType>) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(toggleIsFetching(false));
        });
    }
}

export const followTC = (userId: string) => {

    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggle(userId))
            }
            dispatch(toggleFollowingInProgressAC(false, userId))
        })
    }
}
export const unFollowTC = (userId: string) => {

    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.unFollowUser(userId).then(response => {
            if (response.data.resultCode === 1) {
                dispatch(toggle(userId))
            }
            dispatch(toggleFollowingInProgressAC(false, userId))
        })
    }
}