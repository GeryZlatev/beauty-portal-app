import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import style from './FindServices.module.css';
import { Link } from 'react-router-dom';

class FindServices extends Component {


    render() {
        return (
            <>
                {localStorage.getItem('user')} ?
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
                    </div> :
                    <Redirect to="/register"/>
            </>
        )
    }
}

export default FindServices;