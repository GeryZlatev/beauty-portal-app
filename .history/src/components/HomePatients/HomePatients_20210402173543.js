import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
import { useState, useEffect, useRef } from 'react';
import * as ServicesDB from '../../services/servicesDB';
import Loader from '../../Shared/Loader';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';
import SearchBar from '../SearchBar';
import Notification from '../../Shared/Notification';

const HomePatients  = (props) => {
    const [myProcedures, setMyProcedures] = useState([]);
    const [category, setCategory] = useState('aestheticDermatology');
    const [loading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        ServicesDB.getAll(category)
            .then(res => {
                setIsLoading(false)
                setMyProcedures(res.docs.map((x) => {
                    return { id: x.id, ...x.data() }
                }))
            })
        return(() => setFlag(flag => !flag))

    }, [category]);

    const onDislikeHandler = (procedureId, catalogue) =>{
        const userId = JSON.parse(localStorage.getItem('user'))
        ServicesDB.dislikeProcedure(procedureId, catalogue, userId)
        setFlag(flag => !flag);
    }

const showLoggedUserUi = () => {
    return (
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
                : myProcedures.length ? myProcedures
                .filter((x) => x.likes.includes(JSON.parse(localStorage.getItem('user'))))
                        .map((x) => {
                            const procedureId = x.id;
                            const catalogue = category;
                    return (
                        <Favorite key={x.id} title={x.name} description={x.info} image={x.image} event={() => {
                            onDislikeHandler(procedureId, catalogue)
                        }}/>
                )
    }): <Notification>You have not selected procedures!</Notification>}
            </div>
    </>
        )
}
    
        return (
            <>
                {localStorage.getItem('user')
                    ? showLoggedUserUi()
            : <Redirect to="/"/>}
            </>
        )
    }

export default HomePatients;