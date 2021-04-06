import React, { useState } from 'react';
import { withRouter} from 'react-router-dom';
import {auth} from '../../../services/firebase';
import style from './Register.module.css';
import Input from '../Input';
import Error from '../../../Shared/ErrorMessage';


function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [amIaDoctor, setAmIaDoctor] = useState(false);
    // const [user, setUser] = useState('');

    const clearErrors = () => {
        setEmailErr('');
        setPasswordErr('');
    }

    const handleSignup = (e) => {
        e.preventDefault()
        clearErrors()
        if (password !== repeatPassword) {
            setPasswordErr('Passwords missmatch!');
            setPassword("");
            setRepeatPassword("");
            return null;
        }

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            localStorage.setItem('doctor', JSON.stringify(amIaDoctor));
            props.history.push('/login')
        })
    .catch(err => {
            setEmailErr(err.message);
    })
    }

        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={handleSignup}>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="example@email.com"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    >
                        Email
                    </Input>
                    {emailErr ? <Error>{ emailErr}</Error> : null}
                    <Input
                        type="password"
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    >
                        Password
                    </Input>
                    <Input
                        type="password"
                        name="repeatPassword"
                        value={repeatPassword}
                        placeholder="confirm password"
                        onChange={e => {
                            setRepeatPassword(e.target.value)
                            // if (password !== repeatPassword) {
                            //     setPasswordErr('Passwords mismatch!');
                            // } else {
                                setPasswordErr("");
                            // }
                        }}
                    >
                        Repeat Password
                    </Input>
                    {passwordErr ? <Error>{passwordErr}</Error> : null}
                    <div className={style.radio} onChange={(e) => setAmIaDoctor(e.target.value)}>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                name="doctor"
                                
                            />
                            I am a doctor
                        </label>
                        <label>
                        <input
                            type="radio"
                            value="no"
                            name="doctor"
                            />
                            I am NOT a doctor
                        </label>
                    </div>
                    
                    <input
                        type="submit"
                        value="Sign Up"
                    />
                </form>
                    <p>You already have an account..!?</p>
                <button
                    className={style["loggin-button"]}
                    onClick={() => props.history.push('/login') }
                >
                    Log in
                </button>
            </div>
        )
    }

export default withRouter(Register)