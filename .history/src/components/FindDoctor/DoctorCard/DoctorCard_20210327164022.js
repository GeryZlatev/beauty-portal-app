import style from './DoctorCard.module.css';
const DoctorCard = (props) => {

    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={props.image} alt="Photo of the doctor"/>
                </div>
                <div className={style["content-wrapper"]}>
                    <p>Doctor: {props.name}</p>
                    <p>Practice: {props.practice}</p>
                    <p>City: {props.city}</p>
                    <p>Contacts: {props.phone}</p>
                </div>
            </div>
        </>
    )

}

export default DoctorCard;