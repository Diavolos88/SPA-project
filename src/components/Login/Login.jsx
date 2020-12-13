import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../Utils/validators/validators";
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const maxLenght10 = maxLenghtCreator(10)


const Login = (props) => {

    const onSubmitw = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    debugger
    if (props.isAuth) return <Redirect to={'/profile'}/>
    else {
        return (
            <div className={s.login}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmitw}/>
            </div>
        );
    }
}

const LoginForm = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"}
                       validate={[required]} component={"input"}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={"input"}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div className={s.formSummaryError}>{props.error}</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) =>({
    isAuth : state.auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login);