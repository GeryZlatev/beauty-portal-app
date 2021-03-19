import React, { Component } from 'react';
import style from './Favorite.module.css';

class Favorite extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style["favorite-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src="" alt="image service"/>
                </div>
                <h3 className={style["header-service"]}>{this.props.title}</h3>
                <p className={style.description}>{this.props.title}</p>
                <button className={style["dislike-button"]}>Dislike</button>
            </div>
        )
    }
}

export default Favorite;