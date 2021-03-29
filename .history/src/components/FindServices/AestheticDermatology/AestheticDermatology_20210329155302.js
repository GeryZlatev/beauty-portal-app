import style from './AestheticDermatology.module.css';
import * as ServicesDB from '../../../services/servicesDB';
import { useState, useEffect } from 'react';

import ProcedureCard from '../ProcedureCard';
import Notification from '../../../Shared/Notification';


const AestheticDermatology = (props) => {

    const [procedures, setProcedures] = useState([]);
    const [catalogue, setCatalogue] = useState('aestheticDermatology')

    useEffect(() => {
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                setProcedures(res.docs.map((x) => {
                    console.log(x.data().likes)
                    return {id: x.id, ...x.data()}
                }))
            })
        procedures ? procedures.sort((a, b) => b.likes.length - a.likes.length) : null
    }, [])
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                {procedures ? procedures.map((x) => {
                    return (
                        <ProcedureCard
                            key={x.id}
                            id={x.id}
                            category="aestheticDermatology"
                            image={x.image}
                            name={x.name}
                            info={x.info}
                            style="aestheticDermatology"
                            likes={x.likes.length}
                        />
                    )
                }) : <Notification> There are no procedures on this page! We are so sorry ...</Notification>}
            </div>
        </>
    )
}

export default AestheticDermatology;