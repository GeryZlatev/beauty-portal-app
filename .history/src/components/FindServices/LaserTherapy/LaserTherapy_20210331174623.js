import style from './LaserTherapy.module.css';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import * as ServicesDB from '../../../services/servicesDB';

import ProcedureCard from '../ProcedureCard';
import VerticalHeaderLine from '../../Advertising/VerticalHeaderLine';
import Loader from '../../../Shared/Loader';

const currentStyle = {
    border: '1px solid #9190C7'
}

const LaserTherapy = () => {
    const [procedures, setProcedures] = useState([]);
    const [catalogue, setCatalogue] = useState('laserTherapy');
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        ServicesDB
            .getAll(catalogue)
            .then(res => {
                setIsLoading(false);
                setProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
                
            })
    }, [])

return (
        <>
            <div className={style["laser-therapy-wrapper"]}>
            {loading ? <Loader/> : procedures ? procedures
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
                }) : null}

        </div>
        <div className={style["advert-wrapper"]}>
                <VerticalHeaderLine>SHR - The world's most advanced technology</VerticalHeaderLine>
            <div className={style["player-laser-soprano"]}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ASGv0_iQ3n4"
                    playing={true}
                    loop= {true}
                    width="850px"
                    height="580px"
                    style={{margin: "100px auto"}}
                />
            </div>
        </div>
        </>
    )
}

export default LaserTherapy;