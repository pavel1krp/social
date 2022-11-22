import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div >
            <ProfileInfo  src={'https://oir.mobi/uploads/posts/2021-03/1616990293_11-p-fon-dlya-risovaniya-12.jpg'} alt={'Ava'}/>
            <MyPosts />
        </div>
    );
};

export default Profile;