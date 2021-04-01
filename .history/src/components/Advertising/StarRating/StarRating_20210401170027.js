import React, { Component } from 'react';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: 0
        }

        this.change = this.change.bind(this);
    }
}