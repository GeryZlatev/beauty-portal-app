import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../../../services/firebase';
import style from './Register.module.css';
import Input from '../Input';
import Error from '../../ErrorMessage';


function Register(props) {
    const {
email,
setEmail,
password,
setPassword,
handleLogin,
handleSignup,
hasAccount,
setHasAccoun,
emailErr,
setEmailErr,
passwordErr
    } = props

        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form>
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
                    <Input
                        type="password"
                        name="repeatPassword"
                        
                        // onChange={}
                    >
                        Repeat Password
                    </Input>
                    
                    <input
                        type="submit"
                        value="Sign Up"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSignup()
                                .then(user => {
                                    console.log(user);
                                    props.history.push('/patients/login');
                                })
                                .catch(err => {
                                    console.log(err)
                                });

                            
                        }}
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