import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import FindServices from '../FindServices';

class HomePatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    showLoggedUserUi() {
        return (
            <Fragment>
                <FindServices/>
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