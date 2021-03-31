import React, { Component } from 'react';
import style from './Favorite.module.css';

class Favorite extends Component {
    constructor(props) {
        super(props)
    }
// dislike change function - remove element from the page
    render() {
        return (
            <div className={style["favorite-wrapper"]}>
                <div className={style["image-wrapper"]}>
                    <img src={this.props.image} alt="image service"/>
                </div>
                {/* <button className={style.more} onClick={() => {
                    return
                }}>More</button > */}
                <h3 className={style["header-service"]}>{this.props.title}</h3>
                {/* <p className={style.description}>{this.props.description}</p> */}
                <button className={style["dislike-button"]}>Dislike</button>
            </div>
        )
    }
}

export default Favorite;