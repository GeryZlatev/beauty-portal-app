import style from './DoctorCard.module';
const DoctorCard = (props) => {

    return (
        <>
            <div className={style["card-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={props.image} alt="Photo of the doctor"/>
                </div>
                <div className={style["content-wrapper"]}>
                    <p>{props.name}</p>
                    <p>{ props.}</p>

                </div>
            </div>
        </>
    )

}

export default DoctorCard;