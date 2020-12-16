import React from 'react';
import s from './Users.module.css';
import Paginator from "./Paginator";
import User from "./User";


let Users = (props) => {
    return (
        <div>
            <div className={s.usersPage}>
                {
                    props.usersData.map(u => (<User user={u} {...props}/>))
                }
            </div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPage={props.onPage}/>
        </div>
    );
}

export default Users