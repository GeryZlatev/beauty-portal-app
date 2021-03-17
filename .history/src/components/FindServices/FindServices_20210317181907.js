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
                    <div className={style.aestheticDermatology}>
                        <Link to="aesthetic-dermatology">Aesthetic Dermatology</Link>
                    </div>
                    <div className={style.laser}>
                        <Link to="/laser-therapies">Laser Therapies</Link>
                    </div>
                    <div className={style.agnes}>
                        <Link to="/agnes">Agnes</Link>
                        </div>
                    <div className={style.femilift}>
                        <Link to="/femi-lift">Femi Lift</Link>
                        </div>
                    <div className={style.cellulite}>
                        <Link to="anti-cellulite">Anti-cellulite</Link>
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default FindServices;