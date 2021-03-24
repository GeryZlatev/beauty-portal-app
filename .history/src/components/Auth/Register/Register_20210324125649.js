import React, { useCallback, useState,  } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import {auth} from '../../../services/firebase';
import style from './Register.module.css';
import Input from '../Input';
import Error from '../../ErrorMessage';


function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [user, setUser] = useState('');


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
        .then(res => {
            setUser(res.user.uid)
            props.history.push('/patients/login')
        })
    .catch(err => {
        // switch (err.code) {
        // case 'auth/email-already-in-use':
        // case 'auth/invalid-email':
            setEmailErr(err.message);
        //     break;
        // case 'auth/weak-password':
            // setPasswordErr(err.message);
            // break;
        // }
    })
    }

//     const handleErrorsMessage = (errorMessage) => {
//         return (
//             setTimeout(() =>
//             {
//                 return <Error> { errorMessage }</Error >
//             }, 3000)
        
//     )
// }

    
        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={handleSignup}>
                    <Input
                        type="email"
                        name="email"
                        value={email}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    >
                        Password
                    </Input>
                    <DebounceInput
                        type="password"
                        name="repeatPassword"
                        value={repeatPassword}
                        debounceTimeout={5000}
                        onChange={e => {
                            setRepeatPassword(e.target.value)
                            if (password !== repeatPassword) {
                                setPasswordErr('Passwords mismatch!');
                            } else {
                                setPasswordErr("");
                            }
                        }}
                    >
                        Repeat Password
                    </DebounceInput>
                    {passwordErr ? <Error>{passwordErr}</Error>: null}
                    
                    <input
                        type="submit"
                        value="Sign Up"
                        // onClick={() => {
                        //     <Redirect to="/patients/login" />
                        // }}

                    />
                </form>
                    <p>You already have an account..!?</p>
                <button
                    className={style["loggin-button"]}
                    onClick={() => props.history.push('/patients/login') }
                >
                    Log in
                </button>
            </div>
        )
    }



export default withRouter(Register)