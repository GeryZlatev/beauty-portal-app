import style from './LaserTherapy.module.css';
import { useState, useEffect } from 'react';
import * as ServicesDB from '../../../services/servicesDB';

import ProcedureCard from '../ProcedureCard';
import Notification from '../../../Shared/Notification';

const LaserTherapy = () => {
    const [procedures, setProcedures] = useState([]);
    const [catalogue, setCatalogue] = useState('laserTherapy');

    useEffect(() => {
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                setProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })
    }, [])

return (
        <>
            <div className={style["laser-therapy-wrapper"]}>
                {procedures ? procedures.map((x) => {
                    return (
                        <ProcedureCard key={x.id} image={x.image} name={x.name} colour="#9190C7"/>
                    )
                }) : <Notification> There are no procedures on this page! We are so sorry ...</Notification>}
            </div>
        </>
    )
}

export default LaserTherapy;