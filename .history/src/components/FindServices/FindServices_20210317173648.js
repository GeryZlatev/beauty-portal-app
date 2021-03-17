import React, { Component } from 'react';
import style from './FindServices.module.css';

class FindServices extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            this.state.showMenu ? (
                <div className={style.menu}>
                    <button>Menu Item 1</button>
                    <button>Menu Item 2</button>
                    <button>Menu Item 3</button>
                </div>
            ) : (
                    null
            )
        )
    }
}

export default FindServices;