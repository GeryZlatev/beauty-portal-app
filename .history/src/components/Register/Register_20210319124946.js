import React, { Component } from 'react';
import firebase from '../../services/firebase';
import style from './Register.module.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: ''
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


        //fetch

        this.setState({email: '', password: '', repeatPassword: ''})

    }
    render() {
        const {
            email,
            password,
            repeatPassword
        } = this.state;
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
            </div>
        )
    }

}

export default Register