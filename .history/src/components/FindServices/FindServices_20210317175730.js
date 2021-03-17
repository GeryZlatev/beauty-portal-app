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
                    <span className={style.aestheticDermatology}>Aesthetic Dermatology</span>
                    <span className={style.laser}>Laser Therapies</span>
                    <span className={style.agnes}>Agnes</span>
                    <span className={style.femilift}>Femi Lift</span>
                    <span className={style.cellulite}>Anti-cellulite</span>
                </div>
            </Fragment>
        )
    }
}

export default FindServices;