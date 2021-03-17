import style from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <article className={style.privacyPolicy}>
            <h2 className={style.privacyPolicyHeader}>Digital Media – Terms /& Conditions</h2>
            <h3 className={style.privacyPolicyHeader}>Definitions</h3>
            <ul>
                <li>“Content” is defined as text, graphics, photographs, animation, video, structure, navigation, functionality and features on any type of digital page.</li>
                <li>“Digital Media” and/or “channel” and/or “Beauty Portal” is defined as Beauty Portal owned and managed website/s, Twitter, YouTube and any other social media pages</li>
                <li>
                    “Contribution” is defined as submission of content by any user to any of the Beauty Portal owned digital media pages. 
                </li>
                <li>
                    “Distribution” and/or “sharing” is defined as emailing, re-tweeting, sending or saving to a page owned or not owned by Beauty Portal or a personal page by any means, such as using a social media button.
                </li>
            </ul>
        </article>
    )
}

export default PrivacyPolicy