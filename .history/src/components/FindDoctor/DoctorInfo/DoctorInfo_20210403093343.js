import style from './DoctorInfo.module.css';

const DoctorInfo = (props) => {
    return (
        <>
        <div
            className={style["doctor-info-wrapper"]}
        >
            {props.children}
            </div>
            {/* <Feedback/> */}
        </>
    )
}

export default DoctorInfo;