import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDatapropsType} from "../../Redux/State";



export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
    addPost:(post:string)=>void
}
const Profile = (props:PropsType) => {
    const addPostCallback =(post:string)=>{
        props.addPost(post)
    }
    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'} alt={'Ava'}/>
            <MyPosts addPost={addPostCallback} post ={props.post}/>
        </div>
    );
};

export default Profile;