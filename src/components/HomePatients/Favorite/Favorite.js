import React, { Component } from 'react';
import style from './Favorite.module.css';
import imageEllance from '../../../media/EllanseLogo-723x250.jpg';

class Favorite extends Component {
    constructor(props) {
        super(props)
    }
// dislike change function - remove element from the page
    render() {
        return (
            <div className={style["favorite-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={imageEllance} alt="image service"/>
                </div>
                <h3 className={style["header-service"]}>{this.props.title}</h3>
                <p className={style.description}>{this.props.description}</p>
                <button className={style["dislike-button"]}>Dislike</button>
            </div>
        )
    }
}

export default Favorite;