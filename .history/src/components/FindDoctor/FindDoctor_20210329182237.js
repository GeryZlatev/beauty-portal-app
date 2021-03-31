import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect, useState } from 'react';
import avatar from '../../media/avatar-placeholder.png';
import Notification from '../../Shared/Notification';
import { useLoading } from '@agney/react-loading';

const FindDoctor = (props) => {

    const [specialists, setSpecialists] = useState([]);
    const [catalogue, setCatalogue] = useState('specialist');
    const { containerProps, indicatorEl } = useLoading({
    loading: true,
})


    useEffect(() => {
        {<section {...containerProps}>{indicatorEl}</section>}
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                setSpecialists(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })
        
        }, []);
        return (
            <>
                <div className={style['cards-wrapper']}>
                    {specialists ? specialists.map((x) => {
                        return  (<DoctorCard
                            key={x.id}
                            name={x.name}
                            practice={x.practice}
                            city={x.city}
                            phone={x.phone}
                            image={x.image || avatar}
                        />)
                    }) : <Notification> There are no doctors on this page! We are so sorry ...</Notification>}
                </div>
            </>
        )

}
    
export default FindDoctor;
