import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import React, { Fragment, Component } from 'react';
import style from './About.module.css';

const About = () => {
    return (
        <Fragment>
            <article className={style.aboutWrapper}>
            <h3 className={style.aboutHeader}>Our mission</h3>
            <p className={style.content}>Beauty Portal exists to banish the stigma, judgment, and secrecy around the medical aesthetics industry. We strive to empower our community to take ownership of their bodies, their choices, and their lives.</p>
            <h3 className={style.aboutHeader}>Beautiful Before. Beautiful After.</h3>
            <p className={style.content}>“The more we talk about all we do the less alone people will feel for not being “born” looking a certain way. It’s all fine. Own getting it own not getting it. It’s all about options and acceptance”<span className={style.author}>— BP Client</span></p>
            <h3 className={style.aboutHeader}>It’s not about not being “enough”.</h3>
            <p className={style.content}>“It's amazing how many people "admit" they've had treatments done once you start talking about your own experiences; they really are way more common than some people think. It's important to reinforce the self-love angle when it comes to medical aesthetics - it's not about changing yourself or not being "enough", it's about choosing to enhance what you have; if that’s what makes you feel more confident and radiant, that's all that matters.” <span className={style.author}>-BP Client</span></p>
            </article>
        </Fragment>
)
}

export default About;