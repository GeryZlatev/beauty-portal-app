import style from './DoctorCard.module.css';
import logo from '../../../media/beautyportal_logo.png';
import { StarFillIcon, StarIcon, LocationIcon } from '@primer/octicons-react';

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
                <div className="rating-wrap">
            <div className="rating">
                {rating.toFixed(2)} / {votes} votes
            </div>
                {[0, 0, 0, 0, 0].map((_, idx) => (
            <span key={`star-d-${idx}`}>{(idx < ratingRound ? StarFillIcon : StarIcon)({ size: 'small' })}</span>
        ))}
        </div>
                <button>More...</button>
            </div>
        </>
    )

}

export default DoctorCard;