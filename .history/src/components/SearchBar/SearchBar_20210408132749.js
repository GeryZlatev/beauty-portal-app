import React, { Fragment, Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import style from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
faSearchengin
} from '@fortawesome/free-brands-svg-icons';
import * as ServicesDB from '../../services/servicesDB';
import DoctorCard from '../FindDoctor/DoctorCard';
import Loader from '../../Shared/Loader';
import avatar from '../../media/avatar-placeholder.png';
import DoctorInfo from '../FindDoctor/DoctorInfo';

library.add(
faSearchengin
);

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            doctors: [],
            loading: false
        }
    }

    onSearchHandler = (e) => {
        this.setState({query: e.target.value})
    }

    onSubmitFormHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        ServicesDB.sortSpecialists(this.state.query, "name")
            .then(res => {
                this.setState({query: ''})
                this.setState({ loading: false })
                this.setState({doctors: res.docs.map((x, i) => {
            return {id: x.id, id2: i, ...x.data()}
        })})
        })
    }

    render() {
        return (
            <Fragment>
                <div className={style.searchBar}>
                    <ul className={style.searchBarContent}>
                        <li><Link to="/services">Find a service...</Link></li>
                        <li><Link to="/doctors">Find a doctor</Link></li>
                    </ul>
                <form onSubmit={this.onSubmitFormHandler} className={style.searchForm}>
                        <input
                            type="text"
                            placeholder="  Please, enter doctor's first and last name..."
                            name="search"
                            value={this.state.query}
                            onChange={this.onSearchHandler}
                        >

                        </input>
                        <button type="submit">
                            <FontAwesomeIcon icon={ faSearchengin}/>
                        </button>
                </form>

                </div>
                <div className={style["doctors-found"]}>
                {this.state.loading? <Loader/> : this.state.doctors.length ? this.state.doctors.map((x) => {
                    return (
                        <>
                            <DoctorCard
                            key={x.id}
                            name={x.name}
                            practice={x.practice}
                            city={x.city}
                            phone={x.phone}
                            image={x.image || avatar}
                            doctor={x.id}
                            />
                            <DoctorInfo
                                key={x.id2}
                            >{x.bio}</DoctorInfo>
                        </>

                    )
                }) : null}
                </div>
            </Fragment>
        )
    }
}

export default SearchBar;