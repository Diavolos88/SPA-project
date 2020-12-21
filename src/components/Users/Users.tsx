import React, {FC} from 'react';
import s from './Users.module.css';
import Paginator from "./Paginator";
import User from "./User";
import {usersDataType} from "../../redux/usersReducer";

type propsType = {
    usersData: Array<usersDataType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPage: Function
    followingInProgress: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleFollowingInProgress: Function
}

let Users: FC<propsType> = (props) => {
    return (
        <div>
            <div className={s.usersPage}>
                {
                    props.usersData.map(u => (<User userItem={u} followingInProgress={props.followingInProgress} follow={props.follow}
                                                    unfollow={props.unfollow}/>))
                }
            </div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPage={props.onPage}/>
        </div>
    );
}

export default Users