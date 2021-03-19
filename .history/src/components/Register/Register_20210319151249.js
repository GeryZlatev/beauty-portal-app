import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {auth} from '../../services/firebase';
import style from './Register.module.css';
import Input from './Input';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            redirect: false,
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
        console.log(this.state);
        if (this.state.password !== this.state.repeatPassword) {
            console.log('Passwords mismatch!');
            return;
        }

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                console.log(res)
        })
        //fetch and then (() => this.setState ({redirect: true}))
        this.setState({email: '', password: '', repeatPassword: ''})
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
                    <Input id="email" label="Email" value={email} onChange={ this.changeEmail}/>
                    <Input id="password" label="Password" value={password} onChange={ this.changePassword}/>
                    <Input id="repeatPassword" label="Repeat Password" value={repeatPassword} onChange={ this.chanceRepeatPassword}/>
                    <input type="submit" value="Sign Up" />
                </form>
                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]} onClick={this.routeChange}>Log in</button>
            </div>
        )
    }

}

export default withRouter(Register)