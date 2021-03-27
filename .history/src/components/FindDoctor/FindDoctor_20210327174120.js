import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect } from 'react';
import avatar from '../../media/avatar-placeholder.png';

const FindDoctor = (props) => {

    useEffect(() => {
        ServicesDB
        .getAllSpecialists()
            .then((res) => {
                specialist = res
                    .docs
                    .map((specialist) => {
                        return {id: specialist.id, ...specialist.data()}
                    })      
        })
    }, [])
    return (
        <>
        <div className={style['cards-wrapper']}>
        {/* <DoctorCard
            name="Emil Bardarov"
            practice="Dermatology"
            city="Sofia"
            phone="0888888888"
            image="https://zdravenportal.com/uploads/x2015/09/29/555_415-50499c46439a03a4700bd14522bb29a4.jpg"
            /> */}
                {specialist.map((specialist) => {
                    return (
                    <DoctorCard
                    key={specialist.id}
                    name={specialist.data().name}
                    practice={specialist.data().practice}
                    city={specialist.data().city}
                    phone={specialist.data().phone}
                    image={specialist.data().image || avatar}
                    />
                    )
        })}
        </div>
        </>
    )

}

export default FindDoctor;