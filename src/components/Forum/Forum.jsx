import React from 'react';
import s from './Forum.module.css';
import User from './User/User';
import {addPostsActionCreator} from "../../redux/postsReducer";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";


const Forum = (props) => {
    let postsElements = props.store.getState().postsData.cards.map(post => <User name={post.name} title={post.title}
                                                                                 likes={post.likes} ava={post.ava}
                                                                                 mes={post.mes}/>)

    let onAddPost = (values) => {
        props.addPost(values.NewPostTitle, values.NewPostDescription, values.NewPostName, values.NewPostImg)
    }
    return (
        <div className={s.forum}>
            {postsElements}
            <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form className={s.formC} onSubmit={props.onHandleSubmit}>
            <span>Name: </span>
            <Field className={s.inputDescription} name={"NewPostName"} component={"input"}
                   placeholder={"Enter your name"}/>
            <span>Img: </span>
            <Field className={s.inputDescription} name={"NewPostImg"} component={"input"}
                   placeholder={"Enter your img"}/>
            <span>Title: </span>
            <Field className={s.inputTitle} name={"NewPostTitle"} component={"input"}
                   placeholder={"Enter post`s title"}/>
            <span>Description: </span>
            <Field className={s.inputDescription} name={"NewPostDescription"} component={"textarea"}
                   placeholder={"Enter post`s description"}/>
            <div></div>
            <button className={s.addPostButton}>Add post</button>
        </form>
    );
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

let mapStateToProps = (state) => {
    return (
        {k: "a"}
    );
}


let mapDispatchToProp = (dispatch) => {
    return ({
        addPost: (title, desc, name, ava) => {
            dispatch(addPostsActionCreator(title, desc, name, ava))
        }
    });
}

export default connect(connect(mapStateToProps, mapDispatchToProp)(Forum))