import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect } from 'react';

const FindDoctor = (props) => {

    useEffect(() => {
        ServicesDB
        .getAllSpecialists()
            .then((res) => {
                res
                    .docs
                    .map((specialist) => {
                    console.log(specialist.data())
                    return {id: specialist.id, ...specialist.data()}
                    })
                // .then((data) => console.log(data))
        })

    }, [])
    return (
        <>
        <div className={style['cards-wrapper']}>
        <DoctorCard
            name="Emil Bardarov"
            practice="Dermatology"
            city="Sofia"
            phone="0888888888"
            image="https://zdravenportal.com/uploads/x2015/09/29/555_415-50499c46439a03a4700bd14522bb29a4.jpg"
            />
        </div>
        </>
    )

}

export default FindDoctor;