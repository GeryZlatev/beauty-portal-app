import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';
import style from './HomePatients.module.css';

class HomePatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    showLoggedUserUi() {
        //fetch some data
        return (
            <Fragment>
                <FindServices />
                <div className={style["favorite-wrapper"]}>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                    <Favorite title="My Favorite service" description="Some Description"/>
                </div>
                
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                {this.state.isLoggedIn
                    ? this.showLoggedUserUi()
            : <Redirect to="/patients/register"/>}
            </Fragment>
        )
    }
}

export default HomePatients;