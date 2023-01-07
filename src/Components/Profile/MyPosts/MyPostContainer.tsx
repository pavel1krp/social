import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {ActionType, postDatapropsType, StatePropsType} from "../../../Types/types";
import {connect} from "react-redux";

type MyPostContainerPropsType = {
    dispatch: (action: ActionType) => void
    postText: string
    post: postDatapropsType[]
}
export const mapStateToProps = (state:StatePropsType) => {
    return {
        postText:state.profilePage.newPostText,
        post: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText:(newText:string)=>{
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)