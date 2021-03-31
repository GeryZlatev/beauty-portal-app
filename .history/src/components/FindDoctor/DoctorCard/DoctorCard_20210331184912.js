import style from './DoctorCard.module.css';
import logo from '../../../media/beautyportal_logo.png';
import {FacebookShareButton,  LinkedinShareButton, TwitterShareButton, InstapaperShareButton, FacebookIcon, LinkedinIcon, TwitterIcon, InstapaperIcon} from 'react-share';

const DoctorCard = (props) => {

    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["logo-wrapper"]}>
                    <img src={logo} alt="Beauty Portal Logo"/>
                </div>
                <div className={style["image-wrapper"]}>
                    <img src={props.image} alt="Photo of the doctor"/>
                </div>
                <div className={style["content-wrapper"]}>
                    <p>Doctor: <span>{props.name}</span></p>
                    <p>Practice: <span>{props.practice}</span></p>
                    <p>City: <span>{props.city}</span> </p>
                    <p>Contacts: <span>{props.phone}</span></p>
                </div>
                <div className={style["shared-wrapper"]}>
                    <FacebookShareButton url={'https://www.facebook.com/'}>
                        <FacebookIcon size={20} round={true}/>
                    </FacebookShareButton>
                    <LinkedinShareButton url={ 'https://www.linkedin.com/'}>
                        <LinkedinIcon size={20} round={true}/>
                    </LinkedinShareButton>
                    <TwitterShareButton url={'https://twitter.com/'}>
                        <TwitterIcon size={20} round={true} style={{color: 'red'}}/>
                    </TwitterShareButton>
                    <InstapaperShareButton url={'https://www.instagram.com/'}>
                        <TwitterIcon size={20} round={true} style={{color: 'red'}}/>
                    </InstapaperShareButton>
                </div>
                <button>More...</button>
            </div>
        </>
    )
//
    //
    //
}

export default DoctorCard;