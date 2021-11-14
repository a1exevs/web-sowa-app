import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../widgets/controls/FormControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import Redirect from "react-router-dom/es/Redirect";
import style from "./../LoginDialog/LoginDialog.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={'password'} component={Input} validate={required}/>
            </div>
            <div>
                <span>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
                </span>
            </div>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm =  reduxForm({form: 'Login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.authUserData.isAuth
});

export default connect(mapStateToProps, {login} )(Login);