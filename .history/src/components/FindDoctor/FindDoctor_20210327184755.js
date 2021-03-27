import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect, useState } from 'react';
import avatar from '../../media/avatar-placeholder.png';

const FindDoctor = (props) => {

    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        ServicesDB
            .getAllSpecialists()
            .then(res => {
                console.log(res.docs.data());
        })

        }, []);
    
        return (
            <>
                <div className={style['cards-wrapper']}>
                    {/* {specialists.map((x) => {
                        <DoctorCard
                            key={x.id}
                            name={x.name}
                            practice={x.practice}
                            city={x.city}
                            phone={x.phone}
                            image={x.image || avatar}
                        />
                    })} */}
                </div>
            </>
        )

}
    
export default FindDoctor;
