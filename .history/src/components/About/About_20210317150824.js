import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import React, { Fragment, Component } from 'react';
import style from './About.module.css';

const About = () => {
    return (
        <Fragment>
            <h3 className={style.aboutHeader}>Our mission</h3>
            <p className={style.content}>Beauty Portal exists to banish the stigma, judgment, and secrecy around the medical aesthetics industry. We strive to empower our community to take ownership of their bodies, their choices, and their lives.</p>
            <h3 className={style.aboutContent}>Beautiful Before. Beautiful After.</h3>
            <p>“The more we talk about all we do the less alone people will feel for not being “born” looking a certain way. It’s all fine. Own getting it own not getting it. It’s all about options and acceptance”<span className={style.author}>— BP Client</span></p>
        </Fragment>
)
}

export default About;