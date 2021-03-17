import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import logo from '../../media/beautyportal_logo.png';
import style from './Footer.module.css';


import {
faInstagramSquare,
faLinkedin,
faYoutubeSquare,
faFacebookSquare,
faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

library.add(
faInstagramSquare,
faLinkedin,
faYoutubeSquare,
faFacebookSquare,
faTwitterSquare
);

class Footer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <Fragment>
                <footer>
                    <div className={style.contacts}>
                        <ul className={style.contactsList}>
                            <li>
                                <h5>Head Office</h5>
                                <p>+(359)888 000 000</p>
                                <p>beauty_portal@gmail.com</p>
                            </li>
                            <li>
                                <h5>Feedback</h5>
                                <p>+(359)888 000 001</p>
                                <p>15 Samokov, Sofia</p>
                            </li>
                            <li>
                                <h5>Connect With Us</h5>
                                <ul className={style.socialMedia}>
                                    <li className = {style.listItem}><Link to="/"><FontAwesomeIcon icon={faFacebookSquare} /></Link></li>
                                    <li className = {style.listItem}><Link to="/"><FontAwesomeIcon icon={faTwitterSquare} /></Link></li>
                                    <li className = {style.listItem}><Link to= "/"><FontAwesomeIcon icon={ faInstagramSquare}/></Link></li>
                                    <li className = {style.listItem}><Link to="/"><FontAwesomeIcon icon={ faLinkedin}/></Link></li>
                                    <li className = {style.listItem}><Link to="/"><FontAwesomeIcon icon={ faYoutubeSquare}/></Link></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                    <div className={style.logo}>
                        <img src={logo}/>
                    </div>
                    <div className={style.portals}>
                        <ul className={style.portalList}>
                            <li>
                                <h5><a href="">My Patient Portal</a></h5>
                            </li>
                            <li>
                                <h5><a href="">Doctor Login</a></h5>
                            </li>
                            <li>
                                <h5><a href="">Staff information</a></h5>
                            </li>
                        </ul>
                        <p className = {style.allRights}> &copy; 2021 All Rights Reserved | <a href="#"> Privacy Policy</a> </p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;