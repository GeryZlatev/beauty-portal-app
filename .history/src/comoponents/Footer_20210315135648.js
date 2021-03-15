import React, { Fragment, Component } from 'react';
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                                    <li><FontAwesomeIcon icon={['fab', 'facebook-square']}/></li>
                                    <li><i className="fab fa-twitter-square"></i></li>
                                    <li><i className="fab fa-instagram-square"></i></li>
                                    <li><i className="fab fa-linkedin"></i></li>
                                    <li><i className="fab fa-youtube"></i></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                    <div className={style.portals}>
                        <ul className={style.portalList}>
                            <li>
                                <h5>My Patient Portal</h5>
                            </li>
                            <li>
                                <h5>Doctor Login</h5>
                            </li>
                            <li>
                                <h5>Staff information</h5>
                            </li>
                        </ul>

                    </div>
                    <p className = {style.allRights}> </p>
                </footer>

            </Fragment>
        )
    }
}

export default Footer;