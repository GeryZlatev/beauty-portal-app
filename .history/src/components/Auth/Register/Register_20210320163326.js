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
                            console.log(e.target.value)
                            console.log('##########');
                            console.log(email());
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
                            console.log(email, password)
                            handleSignup();
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