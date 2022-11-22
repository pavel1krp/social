import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'} alt={'Ava'}/>
            <MyPosts />
        </div>
    );
};

export default Profile;