import React, { Fragment, Component } from 'react';
import style from './SearchBar.module.css';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Fragment>
                <div className={style.searchBar}>
                    <ul className={style.serachBarContent}>
                        <li><a href="">Find a service...</a></li>
                        <li><a href="">Find a doctor</a></li>
                    </ul>
                <form className={style.searchForm}>
                        <input type="text" placeholder="Search..." name="search"></input>
                        <button type="submit">Search</button>
                </form>

                </div>
            </Fragment>
        )
    }
}

export default SearchBar;