import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
// import { AuthContext } from '../../App';
import { useState, useEffect } from 'react';
import * as ServicesDB from '../../services/servicesDB';
// const DB = firebase.firestore();

const HomePatients  = (props) => {
    // const { dispatch } = React.useContext(AuthContext);
    const [myProcedures, setMyProcedures] = useState([]);
    const [category, setCategory] = useState('')

    useEffect(() => {
        ServicesDB.getAll('aestheticDermatology')
                .then(res => {
                setMyProcedures(res.docs.map((x) => {
                    return {id: x.id, ...x.data()}
                }))
            })

    }, [])


    const showLoggedUserUi = () => {
        //fetch some data
        return (
            <>
                <FindServices />
                <div className={style["favorite-wrapper"]}>
                    {myProcedures
                        ? myProcedures
                            .filter((x) => x.likes.includes(JSON.parse(localStorage.getItem('user'))))
                            .map((x) => {
                                return (
                                    <Favorite key={x.id} title={x.name} description={x.info} image={ x.image}/>
                            )
                        })
                        : null}
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