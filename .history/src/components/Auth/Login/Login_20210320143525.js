import React from 'react';
import Input from '../Input';
import style from './Login.module.css';

const Login = () => {
    return (
        <div className={style["login-wrapper"]}>
            <form>
                <h3>Login</h3>
                <Input type="email" name="email" placeholder="Email">Email</Input>
                <Input type="password" name="password" placeholder="Password">Password</Input>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;