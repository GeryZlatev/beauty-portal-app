import style from './DoctorInfo.module.css';
import Feedback from '../../Feedback';

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