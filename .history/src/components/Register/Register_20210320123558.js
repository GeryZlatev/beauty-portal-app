import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../../services/firebase';
import style from './Register.module.css';
import Input from './Input';


function Register({history}) {

    const handleSubmit = useCallback( event => {
        event.preventDefault();
        
        const { email, password, repeatPassword } = event.target.elements;

        console.log(email.value)
        // try {
        //     await auth
        //     .createUserWithEmailAndPassword()
            
        // } catch {

        // }
    }, [history])



        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" placeholder="Email">Email</Input>
                    <Input type="password" name="password" placeholder="Password">Password</Input>
                    <Input type="password" name="repeatPassword" placeholder="Repeat Password">Repeat Password</Input>
                    
                    <input type="submit" value="Sign Up" />
                </form>
                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]}>Log in</button>
            </div>
        )
    }



export default withRouter(Register)