import React from 'react';

type ProfileStatusPropsType = {
    status:string
}

export const ProfileStatus = (props:ProfileStatusPropsType) => {
    return (
        <div>
            <span>{props.status}</span>
        </div>
    );
};

