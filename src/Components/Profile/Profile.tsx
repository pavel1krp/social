import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, postDatapropsType} from "../../Redux/store";



export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
    newPostText:string
    dispatch: (action:ActionsType) => void
}
const Profile = (props:PropsType) => {
    const addPostCallback =(post:string)=>{
        props.dispatch({type: "ADD-POST"})
    }
    const updateNewPostTextHandler =(newText:string)=>{
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText})
    }
    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'} alt={'Ava'}/>
            <MyPosts newPostText={props.newPostText} updateNewPostText={updateNewPostTextHandler} dispatch={props.dispatch} addPost={addPostCallback} post ={props.post}/>
        </div>
    );
};

export default Profile;