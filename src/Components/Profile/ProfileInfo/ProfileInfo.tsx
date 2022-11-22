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
                <div className={s.description_block}>
                    <img className={s.myAva} src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg" alt="eto ya"/>
                    <p>V golove moei opilki- ne beda!</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;