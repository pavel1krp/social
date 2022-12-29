import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postDatapropsType} from "../../Redux/Store";



export type ProfileProps ={
    post: PropsType[]
}
type PropsType = {
    post: postDatapropsType[]
    postText: string
    dispatch:(action:any)=>void
}
const Profile = (props:PropsType) => {

    return (
        <div >
            <ProfileInfo  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMBNcEe_EGXuh-UuvXVFkcXaDoqFS2TAbwQ&usqp=CAU'} alt={'Ava'}/>
            <MyPosts dispatch={props.dispatch} postText ={props.postText} post ={props.post}/>
        </div>
    );
};

export default Profile;