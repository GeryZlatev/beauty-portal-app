import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';
import Favorite from './Favorite';

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
                <Favorite title="My Favorite service" description="Some Description"/>
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