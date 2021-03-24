import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../media/beautyportal_logo.png';
import { auth } from '../../services/firebase';



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
        this.renderLoginLinks = this.renderLoginLinks.bind(this);
        this.renderLogoutLink = this.renderLogoutLink.bind(this);
    }

    handleLogout = () => {
        auth.signOut();
        localStorage.clear();

}

    renderLogoutLink() {
        return (
    <Fragment>
            <li><Link to="/specialist">For Specialists</Link></li>
            <li><Link to="/patients">For Patients and Families</Link></li>
            <li><Link to="/" onClick={this.handleLogout}>Logout</Link></li>        
    </Fragment>
        )
    }

    renderLoginLinks() {
        return (
                <Fragment>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>   
                </Fragment>
        )
    }

    render() {

        return (
            <Fragment>
                <nav className={style.navigationbar}>
                    <div className={style.logoWrapper}>
                        <img src={ logo} alt="Beauty Portal Logo"/>
                    </div>
                <ul className={style.navigation}> 
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        {this.state.isLoggedIn
                        ? this.renderLogoutLink() 
                        : this.renderLoginLinks()}
                </ul>
                </nav>
            </Fragment>

        )
    }
}

export default Navbar;