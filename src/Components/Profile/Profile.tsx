import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogDataType, MessagesDataType, postDatapropsType} from "../../App";


export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
}
const Profile = (props:PropsType) => {

    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'} alt={'Ava'}/>
            <MyPosts post ={props.post}/>
        </div>
    );
};

export default Profile;