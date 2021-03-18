import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../media/beautyportal_logo.png';



class Navbar extends Component {
    // constructor(props) {
    //     super (props)
    // }

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
                    <li><Link to="/specialist">For Specialists</Link></li>
                    <li><Link to="/patients">For Patients and Families</Link></li>
                </ul>
                </nav>
            </Fragment>

        )
    }
}

export default Navbar;