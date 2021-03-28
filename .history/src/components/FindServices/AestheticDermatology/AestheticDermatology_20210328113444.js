import style from './AestheticDermatology.module.css';
import * as ServicesDB from '../../../services/servicesDB';
import { useState, useEffect } from 'react';

import ProcedureCard from '../ProcedureCard';
import Notification from '../../../Shared/Notification';


const AestheticDermatology = (props) => {

    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
            ServicesDB
            .getAllAestheticProcedures()
            .then(res => {
                setProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })
    }, [])
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                {procedures ? procedures.map((x) => {
                    return (
                        <ProcedureCard image={x.image} name={ x.name}/>
                    )
                }) : <Notification> There are no procedures on this page! We are so sorry ...</Notification>}
            </div>
        </>
    )
}

export default AestheticDermatology;