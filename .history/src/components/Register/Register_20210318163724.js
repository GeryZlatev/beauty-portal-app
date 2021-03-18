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

        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange(event) {
        this.setState({email: event.target.email, password: event.target.password, repeatPassword: event.target.repeatPassword})
    }
    render() {
        return (
            <div className={style["register-wrapper"]}>
            <form className={style["register-form"]}>
                <label for="fname">Email: </label>
                <input type="text" value={this.state.email} onChange={this.handleChange}/>
                
                <label>Password:</label>
                <input type="text" value={this.state.password} onChange={this.handleChange}/>
                <label>Repeat password:</label>
                <input type="text" value={this.state.repeatPassword} onChange={this.handleChange}/>
                
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }

}

export default Register