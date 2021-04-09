import style from './AntiCellulite.module.css';
import * as ServicesDB from '../../../services/servicesDB';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import ProcedureCard from '../ProcedureCard';
import VerticalHeaderLine from '../../Advertising/VerticalHeaderLine';
import Loader from '../../../Shared/Loader';
import ErrorMessage from '../../../Shared/ErrorMessage';


const AntiCellulite = (props) => {

    const [procedures, setProcedures] = useState([]);
    const [catalogue, setCatalogue] = useState('antiCellulite');
    const [loading, setIsLoading] = useState(false);
    const [errAntiCellulite, setErrAntiCellulite] = useState('')

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
            .catch(err => {
            setErrAntiCellulite(err.message)
        })
    }, [catalogue])
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                {errAntiCellulite ? <ErrorMessage>{ errAntiCellulite}</ErrorMessage> : loading? <Loader/> : procedures ? procedures
                    .sort((a,b) => (b.likes.length - a.likes.length))
                    .map((x) => {
                    return (
                        <ProcedureCard
                            key={x.id}
                            id={x.id}
                            category="antiCellulite"
                            image={x.image}
                            name={x.name}
                            info={x.info}
                            style="antiCellulite"
                            likes={x.likes.length}
                        />
                    )
                }) : null}
            </div>
            <div className={style["advert-wrapper"]}>
                <VerticalHeaderLine>Accent Prime - Love your Shape</VerticalHeaderLine>
            <div className={style["player-laser-soprano"]}>
                <ReactPlayer
                        url="https://www.youtube.com/watch?v=7YCsY3DHy4M"
                        muted={true}
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

export default AntiCellulite;