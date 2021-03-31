import style from './LaserTherapy.module.css';
import { useState, useEffect } from 'react';
import * as ServicesDB from '../../../services/servicesDB';

import ProcedureCard from '../ProcedureCard';
import Notification from '../../../Shared/Notification';

const currentStyle = {
    border: '1px solid #9190C7'
}

const LaserTherapy = () => {
    const [procedures, setProcedures] = useState([]);
    const [catalogue, setCatalogue] = useState('laserTherapy');

    useEffect(() => {
        let isMounted = true;
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                if (isMounted) {
                setProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
                }
            })
        return () => {isMounted = false}
    }, [])

return (
        <>
            <div className={style["laser-therapy-wrapper"]}>
            {procedures ? procedures
                .sort((a,b) => (b.likes.length - a.likes.length))
                .map((x) => {
                    return (
                        <ProcedureCard
                            key={x.id}
                            id={x.id}
                            image={x.image}
                            name={x.name}
                            info={x.info}
                            style={'laserTherapy'}
                            category="laserTherapy"
                            likes={x.likes.length}
                        />
                    )
                }) : <Notification> There are no procedures on this page! We are so sorry ...</Notification>}
            </div>
        </>
    )
}

export default LaserTherapy;