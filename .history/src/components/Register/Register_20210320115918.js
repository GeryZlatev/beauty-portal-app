import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {auth} from '../../services/firebase';
import style from './Register.module.css';
import Input from './Input';
import Error from '../ErrorMessage';
import { useAuth } from '../contexts/AuthContext';

function Register() {
    const { signup } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        signup()
    }


    const  routeChange = () => {
        let path = '/login';
        this.props.history.push(path);
    }

        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={handleSubmit}>
                    <Input type="text" id="email" label="Email"  />
                    <Input type="password" id="password" label="Password"  />
                    <Input type="password" id="repeatPassword" label="Repeat Password"  />
                    
                    <input type="submit" value="Sign Up" />
                </form>
                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]} onClick={routeChange}>Log in</button>
            </div>
        )
    }



export default withRouter(Register)