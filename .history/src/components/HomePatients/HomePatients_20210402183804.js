import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
import { useState, useEffect} from 'react';
import * as ServicesDB from '../../services/servicesDB';
import Loader from '../../Shared/Loader';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';
import SearchBar from '../SearchBar';
import Notification from '../../Shared/Notification';

const HomePatients  = (props) => {
    const [myProcedures, setMyProcedures] = useState([]);
    const [category, setCategory] = useState('aestheticDermatology');
    const [loading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        setIsLoading(true)
        ServicesDB.getAll(category)
            .then(res => {
                setIsLoading(false)
                const allProcedures = res.docs.map((x) => {
                    return { id: x.id, ...x.data() }
                })
                setMyProcedures(allProcedures.filter((x) => x.likes.includes(userId)))
        })

    }, [category, flag]);

    const onDislikeHandler = (procedureId, category) =>{
        ServicesDB.dislikeProcedure(procedureId, category, userId)
        setFlag(flag => !flag);
    }
    return (
    <>
        {userId ? 
        <>
            <SearchBar/>
            <FindServices />
            <VerticalHeaderLine>My procedures</VerticalHeaderLine>
            <div className={style.wrapper}>
                <input type="checkbox" id="btn" className={style.btn}/>
                <label htmlFor="btn" className={style["menu-btn"]}><span>&#9829;</span></label>
                <nav className={style.sidebar}>
                    <div className={style["sidebar-title"]}>Category Menu</div>
                    <div className={style.content}>
            <button
            onClick={() => {
                setCategory((oldState) => oldState = 'aestheticDermatology')
                }}
            >
            Aesthetic Dermatology
            </button>
            <button
            onClick={() => {
                setCategory((oldState) => oldState = 'laserTherapy')
            }} 
            >
            Laser Therapies
            </button>
                    </div>
                </nav>
            </div>
            <div className={style["favorite-wrapper"]}>
                {loading ? <Loader />
                    : myProcedures.length ? myProcedures.map((x) => {
                        return (
                        <Favorite key={x.id} title={x.name} description={x.info} image={x.image} event={() => {onDislikeHandler(x.id, category)}}/> 
                    )
                }) : <Notification>You have not selected procedures!</Notification>}
            </div>
    </>
        : <Redirect to="/"/>}
            </>
        )
}

export default HomePatients;