import style from './DoctorCard.module.css';
import logo from '../../../media/beautyportal_logo.png';
import RatingStars from '../../../Shared/RatingStars';
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
                    <RatingStars className={ style.rating}/>
                </div>
                <button>More...</button>
            </div>
        </>
    )

}

export default DoctorCard;