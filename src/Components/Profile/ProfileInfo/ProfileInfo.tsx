import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";

type ProfileInfoPropsType ={
    src: string,
    alt: string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img className={s.profile_ava} src={props.src} alt={props.alt}/>
                <div className={s.description_block}>ava+ description</div>
            </div>
        </div>
    );
};

export default ProfileInfo;