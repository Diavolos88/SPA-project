import React from 'react';
import s from './NavEntry.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../../../img/minion.png'

const NavEntry = (props) => {
    if (props.isAuth) {
        return (
            <div className={s.entry}>
                <div>Hello {props.login}!</div>
                <NavLink to={"/login"}> <img src={props.ava ? props.ava : ava}/></NavLink>
                <div className={s.logout}>
                    <NavLink onClick={props.logout} to={"/login"} activeClassName={s.activeLink}>Log out</NavLink>
                    {/*<button onClick={props.logout}>Log out</button>*/}
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.entry}>
                <NavLink to={'/login'}>
                    <div>Login</div>
                </NavLink>
                <NavLink to={'/login'}>
                    <div>Registration</div>
                </NavLink>
            </div>
        );
    }
}


export default NavEntry;