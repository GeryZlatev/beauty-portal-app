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
            .then((res) => {
                setSpecialists(res
                    .docs
                    .map((specialist) => {
                        
                        return {id: specialist.id, ...specialist.data()}
                        
                    })) 
                
            })
        }, []);
    
    console.log(specialists);
        return (
            <>
                <div className={style['cards-wrapper']}>
                    {specialists.map((specialist) => {
                        <DoctorCard
                            key={specialist.id}
                            name={specialist.name}
                            practice={specialist.practice}
                            city={specialist.city}
                            phone={specialist.phone}
                            image={specialist.image || avatar}
                        />
                    })}
                </div>
            </>
        )

}
    
export default FindDoctor;
