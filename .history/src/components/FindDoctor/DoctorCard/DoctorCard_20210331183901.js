import style from './DoctorCard.module.css';
import logo from '../../../media/beautyportal_logo.png';
import {FacebookShareButton,  LinkedinShareButton, ViberShareButton, FacebookIcon, LinkedinIcon, ViberIcon} from 'react-share';

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
                    <FacebookShareButton>
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <LinkedinShareButton>
                        <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>
                    <ViberShareButton>
                        <ViberIcon size={32} round={true} style={{color: 'red'}}/>
                    </ViberShareButton>
                </div>
                <button>More...</button>
            </div>
        </>
    )
//url={'https://www.facebook.com/'}
    //url={ 'https://www.linkedin.com/'}
    //url={'https://www.viber.com/en/'}
}

export default DoctorCard;