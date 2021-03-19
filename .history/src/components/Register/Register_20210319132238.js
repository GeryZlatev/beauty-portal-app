import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../services/firebase';
import style from './Register.module.css';

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
                    {/* <fieldset> */}
                    <label htmlFor="email">
                    <p>Email:</p>   
                <input type="text" value={email} onChange={this.changeEmail} />
                </label>
                
                    <label htmlFor="password">
                        <p>Password:</p>
                <input type="text" value={password} onChange={this.changePassword} />
                </label>
                    <label htmlFor="repeatPassword">
                        <p>Repeat password:</p>
                <input type="text" value={repeatPassword} onChange={this.chanceRepeatPassword}/>
                    </label>

                        
                    {/* </fieldset> */}
                    <input type="submit" value="Sign Up" />
                </form>
                                    <p>You already have an account..!?</p>
                    <button className={style["loggin-button"]} onClick={this.routeChange}>Log in</button>
            </div>
        )
    }

}

export default Register