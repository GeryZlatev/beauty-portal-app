import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';

const FindDoctor = (props) => {
    return (
        <DoctorCard
            name="Emil Bardarov"
            practice="Dermatology"
            city="Sofia"
            phone="0888888888"
            image=""
        />
    )

}

export default FindDoctor;