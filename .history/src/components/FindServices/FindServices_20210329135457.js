import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AestheticDermatology from './AestheticDermatology';
import LaserTherapy from './LaserTherapy';
import Agnes from './Agnes';

import style from './FindServices.module.css';
import { Link } from 'react-router-dom';

class FindServices extends Component {


    render() {
        return (
            <>
                
                <div className={style.menuWrapper}>
                    <div className={style.aestheticDermatology}>
                        <Link to="/services/aesthetic-dermatology:serviceId">Aesthetic Dermatology</Link>
                    </div>
                    <div className={style.laser}>
                        <Link to="/services/laser-therapies">Laser Therapies</Link>
                    </div>
                    <div className={style.agnes}>
                        <Link to="/services/agnes">Agnes</Link>
                        </div>
                    <div className={style.femilift}>
                        <Link to="/femi-lift">Femi Lift</Link>
                        </div>
                    <div className={style.cellulite}>
                        <Link to="anti-cellulite">Anti-cellulite</Link>
                        </div>
                </div> 
                <Switch>
                    <Route path="/services/aesthetic-dermatology:serviceId" component={ AestheticDermatology}/>
                    <Route path="/services/laser-therapies" component={ LaserTherapy}/>
                    <Route path="/services/agnes" component={ Agnes}/>
                    {/* <Route path="/services/femi-lift" component={ FemiLift}/>
                    <Route path="/services/anti-cellulite" component={ AntiCellulite}/> */}
                    </Switch>
                    
            </>
        )
    }
}

export default FindServices;