import style from './DoctorCard.module.css';
const DoctorCard = (props) => {

    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={props.image} alt="Photo of the doctor"/>
                </div>
                <div className={style["content-wrapper"]}>
                    <p>{props.name}</p>
                    <p>{props.practice}</p>
                    <p>{props.city}</p>
                    <p>{props.phone}</p>
                </div>
            </div>
        </>
    )

}

export default DoctorCard;