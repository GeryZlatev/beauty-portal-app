import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect, useState } from 'react';
import avatar from '../../media/avatar-placeholder.png';

const FindDoctor = (props) => {

    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        const all = [];
        ServicesDB
            .getAllSpecialists()
            .then((res) => {
                res
                    .docs
                    .map((specialist) => {
                        
                        all.push({id: specialist.id, ...specialist.data()})
                        
                    });
                setSpecialists(all);
            })
        console.log(specialists)
        }, []);
    
        
        return (
            <>
                <div className={style['cards-wrapper']}>
                    {/* {specialists.map((specialist) => {
                        <DoctorCard
                            key={specialist.id}
                            name={specialist.data().name}
                            practice={specialist.data().practice}
                            city={specialist.data().city}
                            phone={specialist.data().phone}
                            image={specialist.data().image || avatar}
                        />
                    })} */}
                </div>
            </>
        )

}
    
export default FindDoctor;
