import React, { Fragment, Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import style from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
faSearchengin
} from '@fortawesome/free-brands-svg-icons';
import * as ServicesDB from '../../services/servicesDB'

library.add(
faSearchengin
);


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            doctors: []
        }
    }

    onSearchHandler = (e) => {
        this.setState({query: e.target.value})
    }

    onSubmitFormHandler = (e) => {
        e.preventDefault();
        // this.props.history.push('/doctors')
        ServicesDB.sortSpecialists(this.state.query, "name")
        .then(res => console.log(res))
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
                            placeholder="   Enter doctor name..."
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
            </Fragment>
        )
    }
}

export default SearchBar;