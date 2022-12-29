import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, postDatapropsType} from "../../Types/types";
import {MyPostContainer} from "./MyPosts/MyPostContainer";



export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
    postText: string
    dispatch:(action:ActionType)=>void
}
const Profile = (props:PropsType) => {
    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'}
                          alt={'Ava'}/>
            < MyPostContainer dispatch={props.dispatch} postText={props.postText} post={props.post}/>
        </div>
    );
};

export default Profile;