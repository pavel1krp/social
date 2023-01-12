import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {UserProfileType} from "../../../Types/types";
import vk from '../../../assets/icons/vk.png'
import instagram from '../../../assets/icons/instagram.png'
import facebook from '../../../assets/icons/facebook.png'
import twitter from '../../../assets/icons/twitter.png'
import youtube from '../../../assets/icons/youtube.png'
import github from '../../../assets/icons/github-mark.png'
import {Preloader} from "../../Common/Preloader/Preloader";
import smallUserAvatar from '../../../assets/images/smallUsersAva.png'

type ProfileInfoPropsType = {
    src: string,
    profile: UserProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    console.log(props.profile.photos)
    return (
        <div>
            <div>
                <img className={s.profile_ava} src={props.src} alt={'background'}/>
                <div className={s.description_block}>
                    <div className={s.photoAndSocial}>
                        <img className={s.myAva} src={props.profile.photos.large !==null? props.profile.photos.large: smallUserAvatar }
                             alt="eto ya"/>
                        <div className={s.social}>
                            <a href={props.profile.contacts.facebook}><img className={s.logo} src={facebook}
                                                                           alt="facebook"/></a>
                            <a href={props.profile.contacts.instagram}><img className={s.logo} src={instagram}
                                                                            alt="instagram"/></a>
                            <a href={props.profile.contacts.github}><img className={s.logo} src={github} alt="github"/></a>
                            <a href={props.profile.contacts.vk}><img className={s.logo} src={vk} alt="vk"/></a>
                            <a href={props.profile.contacts.twitter}><img className={s.logo}  src={twitter} alt="twitter"/></a>
                            <a href={props.profile.contacts.youtube}><img className={s.logo} src={youtube} alt="youtube"/></a>
                        </div>
                    </div>
                    {props.profile.lookingForAJob?<p>{props.profile.lookingForAJob}</p>: null}
                    {props.profile.lookingForAJobDescription?<p>{props.profile.lookingForAJobDescription}</p>: null}
                    {props.profile.aboutMe?<p>{props.profile.aboutMe}</p>: null}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;