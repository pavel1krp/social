import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import {ActionType, postDatapropsType} from "../../../Types/types";

type MyPostContainerPropsType = {
    dispatch:(action:ActionType) =>void
    postText: string
    post: postDatapropsType[]
}

export const MyPostContainer = (props:MyPostContainerPropsType) => {
    const changePost = (newText:string)=>{
        props.dispatch( updateNewPostTextAC(newText))
    }
    const addPost = () => {
       props.dispatch(addPostAC())
    }
    return <MyPosts  addPost={addPost}
                     updateNewPostText={changePost}
                     postText ={props.postText}
                     post ={props.post}/>
};
