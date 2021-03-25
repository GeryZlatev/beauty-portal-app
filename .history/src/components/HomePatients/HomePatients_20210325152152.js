import React from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';
import { AuthContext } from '../../App';

const HomePatients  = (props) => {


    const showLoggedUserUi = () => {
    const {dispatch} = React.useContext(AuthContext)
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
                {this.state.isLoggedIn
                    ? this.showLoggedUserUi()
            : <Redirect to="/patients/register"/>}
            </>
        )
    }


export default HomePatients;