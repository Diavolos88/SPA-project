import React from 'react';
import s from './Users.module.css';
import minion from '../../img/minion.png'
import {NavLink} from "react-router-dom";

let User = (props) => {
    return (
        <div key={props.user.id} className={s.item}>
            <div className={s.firstColumn}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img className={s.ava} src={props.user.photos.small != null ? props.user.photos.small : minion}></img>
                </NavLink>
                {!props.user.followed
                    ? <button className={s.followButton}
                              onClick={() => {
                                  props.follow(props.user.id)
                              }} disabled={props.followingInProgress}>Follow</button>
                    : <button disabled={props.followingInProgress} className={s.followButton}
                              onClick={() => {
                                  props.unfollow(props.user.id)
                              }}>Unfollow</button>
                }
            </div>
            <div className={s.info}>
                <div className={s.other + " " + s.name}>{props.user.name}</div>
                {/*<div className={s.other + " " + s.county}>{u.location.country}</div>*/}
                <div className={s.other + " " + s.status}>{props.user.status}</div>
                {/*<div className={s.other + " " + s.city}>{u.location.city}</div>*/}
            </div>
        </div>
    );
}

export default User