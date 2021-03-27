import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../media/beautyportal_logo.png';
import { auth } from '../../services/firebase';
import { AuthContext } from '../../App';



const Navbar = (props) => {
    const {dispatch} = React.useContext(AuthContext)

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                dispatch({
                    type: 'LOGOUT'
                })
            });
        localStorage.clear();
        
}

    const renderLogoutLink = () => {
        return (
            <>
            <li><Link to="/specialist">For Specialists</Link></li>
            <li><Link to="/patients">For Patients and Families</Link></li>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>        
        </>
        )
    }

    const renderLoginLinks = () => {
        return (
                <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>   
                </>
        )
    }

        return (
            <>
                <nav className={style.navigationbar}>
                    <div className={style.logoWrapper}>
                        <img src={ logo} alt="Beauty Portal Logo"/>
                    </div>
                    <ul className={style.navigation}> 
                        {props.user ?
                        <div className={style.welcome}>Welcome, <span>{ props.email }</span></div> : null}
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        {props.user
                        ? renderLogoutLink() 
                        : renderLoginLinks()}
                </ul>
                </nav>
            </>

        )
    }


export default Navbar;