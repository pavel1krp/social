import React from 'react';
import loader from "../../../assets/Svg/loader.svg";

export const Preloader = () => {
    return (
            <div>
               <img src={loader}  alt={'loading'}/>
            </div>
    );
};
