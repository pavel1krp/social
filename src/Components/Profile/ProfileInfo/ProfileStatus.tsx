import React, {useState} from 'react';

type ProfileStatusPropsType = {
    status:string
}

export const ProfileStatus = (props:ProfileStatusPropsType) => {
    const [editMode, setEditMode]= useState(false);
    return (
        <div>
            {/*{props.profile.lookingForAJob?<p>{props.profile.lookingForAJob}</p>: null}*/}
            {/*{props.profile.lookingForAJobDescription?<p>{props.profile.lookingForAJobDescription}</p>: null}*/}
            {/*{props.profile.aboutMe?<p>{props.profile.aboutMe}</p>: null}*/}
            {props.status}
        </div>
    );
};

