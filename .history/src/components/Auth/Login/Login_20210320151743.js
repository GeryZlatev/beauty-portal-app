import React from 'react';
import Input from '../Input';
import style from './Login.module.css';
import Error from '../../ErrorMessage'

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailErr,
        passwordErr } = props;
    return (
        <div className={style["login-wrapper"]}>
            <form>
                <h3>Login now...</h3>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value="email"
                    onChange={(e) => setEmail(e.target.value)}
                >
                    Email
                </Input>
                {emailErr ? <Error>{ emailErr}</Error> : null}
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value="password"
                    onChange={(e) => setPassword(e.target.value)}
                >
                    Password
                </Input>
                {passwordErr ? <Error>{ passwordErr }</Error> : null}
                <input type="submit" value="Login" />
            </form>
            <p>You do not have an account..!?</p>
            <button className={style["register-button"]}>Register</button>
        </div>
    )
}

export default Login;