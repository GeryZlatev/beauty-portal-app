import React, { Component, Fragment } from 'react';
import style from './FindServices.module.css';

class FindServices extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }


    }



    render() {
        return (
            <Fragment>
                <div className={style.menuWrapper}>
                    <span className={style.aestheticDermatology}
                </div>
            </Fragment>
        )
    }
}

export default FindServices;