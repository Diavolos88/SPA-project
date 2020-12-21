import React from 'react';
import s from './Users.module.css';

type propsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPage: Function
}

let Paginator: React.FC<propsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i === props.currentPage - 2 || i === props.currentPage - 1 || i === props.currentPage ||
            i === props.currentPage + 1 || i === props.currentPage + 2 || i === pagesCount || i === 1) {
            pages.push(i)
        }
    }
    return (
        <div className={s.newPage__block}>
            <div className={s.center}>
                {pages.map(e => {
                    return <span onClick={() => {
                        props.onPage(e)
                    }} className={s.numbers + " " + (props.currentPage === e ? s.newPage : "")}>{e}</span>
                })}
            </div>
        </div>
    );
}

export default Paginator