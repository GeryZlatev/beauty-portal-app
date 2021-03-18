import React, { Fragment, Component } from 'react';
import firebase from '../../services/firebase';

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
            <form>
                <label>
                    Email:
                <input type="text" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                <input type="text" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <label>
                    Repeat password:
                <input type="text" value={this.state.repeatPassword} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default Register