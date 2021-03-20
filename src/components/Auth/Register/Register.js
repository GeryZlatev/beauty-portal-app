import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../../../services/firebase';
import style from './Register.module.css';
import Input from '../Input';
import Error from '../../ErrorMessage';


function Register({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        const { email, password, repeatPassword } = event.target.elements;
        if (password !== repeatPassword) {
            return (
                <Error>
                    The password and confirm-password do not match!
                </Error>
            )
        }
        auth.createUserWithEmailAndPassword(email.value, password.value)
            .then((d) => {
                console.log(d.user.uid)
                history.push('/patients/login')
                
            })
            .catch((err) => {
            alert(err.message)
        })
    
            },
        [history],
    );

        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}>Email</Input>
                    <Input type="password" name="password" placeholder="Password"onChange={e => setPassword(e.target.value)}>Password</Input>
                    <Input type="password" name="repeatPassword" placeholder="Repeat Password">Repeat Password</Input>
                    
                    <input type="submit" value="Sign Up" />
                </form>
                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]}>Log in</button>
            </div>
        )
    }



export default withRouter(Register)