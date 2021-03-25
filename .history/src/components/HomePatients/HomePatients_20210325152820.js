import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
import { AuthContext } from '../../App';

import firebase from '../../services/firebase';
const DB = firebase.firestore();

const HomePatients  = (props) => {
    const { dispatch } = React.useContext(AuthContext);

    const showLoggedUserUi = () => {
    
        //fetch some data
        return (
            <>
                <FindServices />
                <div className={style["favorite-wrapper"]}>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                </div>
                
            </>
        )
    }

    
        return (
            <>
                {localStorage.getItem('user')
                    ? showLoggedUserUi()
            : <Redirect to="/patients/register"/>}
            </>
        )
    }


export default HomePatients;