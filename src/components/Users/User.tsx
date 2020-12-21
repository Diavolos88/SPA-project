import React, {FC} from 'react';
import s from './Users.module.css';
import minion from '../../img/minion.png'
import {NavLink} from "react-router-dom";
import { usersDataType } from '../../redux/usersReducer';

type UserType = {
    userItem: usersDataType
    followingInProgress: boolean
    follow: Function
    unfollow: Function

}

let User: FC<UserType> = (props) => {
    return (
        <div key={props.userItem.id} className={s.item}>
            <div className={s.firstColumn}>
                <NavLink to={'/profile/' + props.userItem.id}>
                    <img className={s.ava} src={props.userItem.photos.small != null ? props.userItem.photos.small : minion}></img>
                </NavLink>
                {!props.userItem.followed
                    ? <button className={s.followButton}
                              onClick={() => {
                                  props.follow(props.userItem.id)
                              }} disabled={props.followingInProgress}>Follow</button>
                    : <button disabled={props.followingInProgress} className={s.followButton}
                              onClick={() => {
                                  props.unfollow(props.userItem.id)
                              }}>Unfollow</button>
                }
            </div>
            <div className={s.info}>
                <div className={s.other + " " + s.name}>{props.userItem.name}</div>
                {/*<div className={s.other + " " + s.county}>{u.location.country}</div>*/}
                <div className={s.other + " " + s.status}>{props.userItem.status}</div>
                {/*<div className={s.other + " " + s.city}>{u.location.city}</div>*/}
            </div>
        </div>
    );
}

export default User