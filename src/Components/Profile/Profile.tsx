import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, postDatapropsType} from "../../Types/types";
import {MyPostContainer} from "./MyPosts/MyPostContainer";



export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
}
const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'}
                          alt={'Ava'}/>
            < MyPostContainer />
        </div>
    );
};

export default Profile;