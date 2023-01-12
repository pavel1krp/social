import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {UserProfileType} from "../../../Types/types";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoPropsType ={
    src: string,
    profile:UserProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.profile_ava} src={props.src} alt={'Avatar'}/>
                <div className={s.description_block} >
                    <img className={s.myAva} src={props.profile.photos.large?props.profile.photos.large: props.src} alt="eto ya"/>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;