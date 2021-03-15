import React, { Fragment, Component } from 'react';
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
                        <li><a href="">Find a service...</a></li>
                        <li><a href="">Find a doctor</a></li>
                    </ul>
                <form className={style.searchForm}>
                        <input type="text" placeholder="   Search..." name="search"></input>
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