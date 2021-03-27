import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';

const FindDoctor = (props) => {
    return (
        <DoctorCard
            name="Emil Bardarov"
            practice="Dermatology"
            city="Sofia"
            phone="0888888888"
            image="https://zdravenportal.com/uploads/x2015/09/29/555_415-50499c46439a03a4700bd14522bb29a4.jpg"
        />
    )

}

export default FindDoctor;