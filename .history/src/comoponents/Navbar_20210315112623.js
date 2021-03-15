import React, { Fragment, Component } from 'react';
import style from './Navbar.module.css';


class Navbar extends Component {
    // constructor(props) {
    //     super (props)
    // }

    render() {
        return (
            <Fragment>
                <nav className={style.navigationbar}>
                    
                <ul className={style.navigation}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/specialist">For Specialists</a></li>
                    <li><a href="/patients">For Patients and Families</a></li>
                </ul>
                </nav>
            </Fragment>

        )
    }
}

export default Navbar;