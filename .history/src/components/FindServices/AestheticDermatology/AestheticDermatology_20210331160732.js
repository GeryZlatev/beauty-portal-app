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
                    return {id: x.id, ...x.data()}
                }))
            })
    }, [])
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                {procedures ? procedures
                    .sort((a,b) => (b.likes.length - a.likes.length))
                    .map((x) => {
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
            <div className={style["advert-wrapper"]}>
                <VerticalHeaderLine>SHR - The world's most advanced technology</VerticalHeaderLine>
            <div className={style["player-laser-soprano"]}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ASGv0_iQ3n4"
                    playing={true}
                    // loop= {true}
                    width="850px"
                    height="580px"
                    style={{margin: "0 auto"}}
                />
            </div>
        </div>
        </>
    )
}

export default AestheticDermatology;