import React, { Component } from 'react';
import style from './Favorite.module.css';
import * as ServicesDB from '../../../services/servicesDB';

class Favorite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flag: false
        }
    }

    onDislikeHandler = () =>{
        console.log(this.props.procedureId);
        const userId = JSON.parse(localStorage.getItem('user'))
        const { procedureId, catalogue } = this.props;
        ServicesDB.dislikeProcedure(procedureId, catalogue, userId)
        this.setState({flag: !this.state.flag})
    }

    componentDidUpdate() {
        console.log('You disliked it')
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