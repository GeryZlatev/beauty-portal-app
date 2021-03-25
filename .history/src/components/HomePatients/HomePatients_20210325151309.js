import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';

const HomePatients  = (props) => {


const showLoggedUserUi = ()  => {
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
            <Fragment>
                {this.state.isLoggedIn
                    ? this.showLoggedUserUi()
            : <Redirect to="/patients/register"/>}
            </Fragment>
        )
    }


export default HomePatients;