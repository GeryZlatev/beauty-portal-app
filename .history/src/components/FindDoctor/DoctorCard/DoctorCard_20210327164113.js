import style from './DoctorCard.module.css';
const DoctorCard = (props) => {

    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={props.image} alt="Photo of the doctor"/>
                </div>
                <div className={style["content-wrapper"]}>
                    <p><span>Doctor:</span> {props.name}</p>
                    <p><span>Practice:</span> {props.practice}</p>
                    <p><span>City:</span> {props.city}</p>
                    <p><span>Contacts:</span> {props.phone}</p>
                </div>
            </div>
        </>
    )

}

export default DoctorCard;