import React, { Fragment, Component } from 'react';
import style from './Navbar.module.css';
import imageOne from '../media/imageOne.jpg';

class Navbar extends Component {
    // constructor(props) {
    //     super (props)
    // }

    render() {
        return (
            <Fragment>
                <nav className={style.navigationbar}>
                    
                <ul className={style.navigation}>
                    <li><a>Home</a></li>
                    <li><a>About us</a></li>
                    <li><a>For Specialists</a></li>
                    <li><a>For Patients and Families</a></li>
                </ul>
                </nav>
                <div className="imae-wrapper">
<img src={imageOne} className={ style.image}/>
                </div>
            </Fragment>

        )
    }
}

export default Navbar;