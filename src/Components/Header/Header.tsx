import React from 'react';
import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
            <header className={classes.header}>
                <img src="https://point.bangbangeducation.ru/img/sbMRG5DK7O-2MNbywcvgS1IPqbmj_h1atA9UMOLTW6M/fill/746/560/ce/1/bG9jYWw6Ly9zdG9y/ZS81YWE4M2U0OWJh/Mjk2MTVmYTQ0MDFk/ODVjODM1ZDBkMzk2/MDQ3ZTE3MGM1OTRl/NmJlNzNjOGYxNDQ0/ZDY.png" alt=""/>
                <div className={classes.loginBlock}>
                    {props.isAuth? props.login :<NavLink to={'/login'}>Login</NavLink>}

                </div>
            </header>
    );
};

export default Header;
