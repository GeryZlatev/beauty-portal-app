import React, {useState} from 'react';
import Input from '../Input';
import style from './Login.module.css';
import Error from '../../ErrorMessage';
import { withRouter } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import { AuthContext } from '../../../App';

const Login = (props) => {
    const {dispatch} = React.useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
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
            dispatch({
                type: 'LOGIN',
                payload: res.json()
            })
            props.history.push('/')
        })
        .catch(err => {
            setEmail('');
            setPassword('');
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
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                    Email
                </Input>
                {/* {errorLogin ? <Error>{ errorLogin }</Error> : null} */}
                <Input
                    type="password"
                    name="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                    Password
                </Input>
                {errorLogin ? <Error>{ errorLogin }</Error> : null}
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