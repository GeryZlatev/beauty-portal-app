import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import style from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
faSearchengin
} from '@fortawesome/free-brands-svg-icons';

library.add(
faSearchengin
);


class SearchBar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Fragment>
                <div className={style.searchBar}>
                    <ul className={style.searchBarContent}>
                        <li><Link to="/services">Find a service...</Link></li>
                        <li><Link to="/doctors">Find a doctor</Link></li>
                    </ul>
                <form className={style.searchForm}>
                        <input type="text" placeholder="   Enter doctor name..." name="search"></input>
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