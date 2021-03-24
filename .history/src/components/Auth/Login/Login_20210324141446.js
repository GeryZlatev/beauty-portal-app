import React, {useState} from 'react';
import Input from '../Input';
import style from './Login.module.css';
import Error from '../../ErrorMessage';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [user, setUser] = usestate('');
    const [errorLogin, setErrorLogin] = useState('');

    const clearErrors = () => {
        setErrorLogin('');
    }

    const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            setUser(res.user.uid);
            props.history.push('/')
        })
        .catch(err => {
            setErrorLogin(err.message);
    })
}
    return (
        <div className={style["login-wrapper"]}>
            <form>
                <h3>Login now...</h3>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                    Email
                </Input>
                {errorLogin ? <Error>{ errorLogin }</Error> : null}
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    defaultValue={e.target.password}
                    // onChange={(e) => setPassword(e.target.value)}
                >
                    Password
                </Input>
                {passwordErr ? <Error>{ passwordErr }</Error> : null}
                <input type="submit" value="Login" onClick={ handleLogin}/>
            </form>
            <p>You do not have an account..!?</p>
            <button className={style["register-button"]}
                onClick={()=> props.history.push('/patients/register')}
            >
                Register
            </button>
        </div>
    )
}

export default withRouter(Login);