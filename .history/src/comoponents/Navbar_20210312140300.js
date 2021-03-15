import React, { Fragment, Component } from 'react';
import style from './Navbar.module.css';
import imageOne from '../media/imageOne.jpg';

class Navbar extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <div>
                <nav className={style.navigationbar}>
                    
                <ul className={style.navigation}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">For Specialists</a></li>
                    <li><a href="#">For Patients and Families</a></li>
                </ul>
                </nav>
                <div className="imae-wrapper">
<img src={imageOne} className={ style.image}/>
                </div>
            </div>

        )
    }
}

export default Navbar;