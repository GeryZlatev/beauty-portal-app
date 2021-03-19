import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {auth} from '../../services/firebase';
import style from './Register.module.css';
import Input from './Input';
import Error from '../ErrorMessage';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            redirect: false,
            error: false
        }
    }
    
    changeEmail = event => {
        this.setState({email: event.target.value})
    }

    changePassword = event => {
        this.setState({password: event.target.value})
    }

    chanceRepeatPassword = event => {
        this.setState({repeatPassword: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.repeatPassword) {
            this.setState({ password: '', repeatPassword: '', error: true});
            console.log('Passwords mismatch!');  
            return;
        }

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                console.log(userCredential.user.uid);
                
        })
        //fetch and then (() => this.setState ({redirect: true}))
        this.setState({ email: '', password: '', repeatPassword: '', redirect: true})
        
    }

    routeChange = () => {
        let path = '/login';
        this.props.history.push(path);
    }
    render() {
        const {
            email,
            password,
            repeatPassword,
            redirect
        } = this.state;

        if (redirect) {
            return <Redirect to='/patients/login'/>
        }
        return (
            <div className={style["register-wrapper"]}>
                <h3><span className={style["first-part"]}>Join us!</span><span className={ style["second-part"]}>Register now</span></h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" id="email" label="Email" value={email} onChange={ this.changeEmail}/>
                    <Input type="password"id="password" label="Password" value={password} onChange={ this.changePassword}/>
                    <Input type="password" id="repeatPassword" label="Repeat Password" value={repeatPassword} onChange={this.chanceRepeatPassword} />
                    {this.state.error ? <Error>Passwords mismatch!</Error> : null}
                    <input type="submit" value="Sign Up" />
                </form>
                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]} onClick={this.routeChange}>Log in</button>
            </div>
        )
    }

}

export default withRouter(Register)