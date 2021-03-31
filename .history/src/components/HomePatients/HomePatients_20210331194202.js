import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
import { useState, useEffect, useRef } from 'react';
import * as ServicesDB from '../../services/servicesDB';
import Loader from '../../Shared/Loader';

const HomePatients  = (props) => {
const [myProcedures, setMyProcedures] = useState([]);
    const [category, setCategory] = useState('aestheticDermatology');
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        ServicesDB.getAll(category)
            .then(res => {
                    setIsLoading(false)
                setMyProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })

    }, [category])

const showLoggedUserUi = () => {
        //fetch some data
    return (
        <>
        <FindServices />
            <div className={style.wrapper}>
                <label className={style["menu-btn"]}>&#9829;</label>
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
                : myProcedures ? myProcedures
                .filter((x) => x.likes.includes(JSON.parse(localStorage.getItem('user'))))
                .map((x) => {
                    return (
                <Favorite key={x.id} title={x.name} description={x.info} image={ x.image}/>
                )
    }): null}
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