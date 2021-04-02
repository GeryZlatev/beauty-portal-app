import DoctorCard from './DoctorCard';
import style from './FindDoctor.module.css';
import * as ServicesDB from "../../services/servicesDB";
import { useEffect, useState } from 'react';
import avatar from '../../media/avatar-placeholder.png';
import Notification from '../../Shared/Notification';
import Loader from '../../Shared/Loader';
import Tags from '../Tags';


const FindDoctor = (props) => {

    const [specialists, setSpecialists] = useState([]);
    const [catalogue, setCatalogue] = useState('specialist');
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                setIsLoading(false);
                setSpecialists(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })
        
    }, []);
    
    const onClickTagHandler = (e) => {
    setIsLoading(true)
    ServicesDB.sortSpecialists(e.target.innerText)
        .then(res => {
        console.log(res)
        setIsLoading(false)
        setSpecialists(res.docs.map((x) => {
            console.log(x.data())
            return {id: x.id, ...x.data()}
        }))
    })
        // console.log(specialists)
    }

        return (
            <>
                <Tags event={ onClickTagHandler}/>
                <div className={style['cards-wrapper']}>
                    {loading? <Loader/> : specialists ? specialists.map((x) => {
                        return  (<DoctorCard
                            key={x.id}
                            name={x.name}
                            practice={x.practice}
                            city={x.city}
                            phone={x.phone}
                            image={x.image || avatar}
                            doctor={x.id}
                        />)
                    }) : <Notification> There are no doctors on this page! We are so sorry ...</Notification>}
                </div>
            </>
        )

}
    
export default FindDoctor;
