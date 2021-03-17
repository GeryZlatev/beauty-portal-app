import React, { Component, Fragment } from 'react';
import style from './FindServices.module.css';
import { Link } from 'react-router-dom';

class FindServices extends Component {

    constructor() {
        super();
        // this.state = {
        //     showMenu: false,
        // }
    }

    render() {
        return (
            <Fragment>
                <div className={style.menuWrapper}>
                    <span className={style.aestheticDermatology}>
                        <Link to="aesthetic-dermatology">Aesthetic Dermatology</Link>
                    </span>
                    <span className={style.laser}>
                        <Link to="/laser-therapies">Laser Therapies</Link>
                    </span>
                    <span className={style.agnes}>
                        <Link to="/agnes">Agnes</Link>
                        </span>
                    <span className={style.femilift}>
                        <Link to="/femi-lift">Femi Lift</Link>
                        </span>
                    <span className={style.cellulite}>
                        <Link to="anti-cellulite">Anti-cellulite</Link>
                        </span>
                </div>
            </Fragment>
        )
    }
}

export default FindServices;