import React, { Component } from 'react';
import style from './Favorite.module.css';

class Favorite extends Component {
    constructor(props) {
        super(props)
        this.onDislikeHandler = onDislikeHandler.bind(this)
    }

    onDislikeHandler() {

    }
// dislike change function - remove element from the page
    render() {
        return (
            <div className={style["favorite-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={this.props.image} alt="image service"/>
                </div>
                <h3 className={style["header-service"]}>{this.props.title}</h3>
                <button className={style["dislike-button"]}
                    onClick={this.onDislikeHandler}
                >Dislike</button>
            </div>
        )
    }
}

export default Favorite;