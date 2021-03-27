import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Home.css';

const images = [
    {
        original: 'https://7dmc.ae/wp-content/uploads/2020/04/derma.jpg',
        thumbnail: 'https://7dmc.ae/wp-content/uploads/2020/04/derma.jpg'
    },

    {
        original: 'https://45d9732zw1a51wklv94e896w-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/7-skin-care-tips-for-men-1000x500.jpg',
        thumbnail: 'https://45d9732zw1a51wklv94e896w-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/7-skin-care-tips-for-men-1000x500.jpg'
    },
    {
        original: 'https://i0.wp.com/affderm.com/wp-content/uploads/2020/04/How-Men-Can-Improve-Their-Skin-Regimen-.jpg?fit=1024%2C512&ssl=1',
        thumbnail: 'https://i0.wp.com/affderm.com/wp-content/uploads/2020/04/How-Men-Can-Improve-Their-Skin-Regimen-.jpg?fit=1024%2C512&ssl=1'
    },
    {
        original: 'https://www.theaestheticguide.com/sites/aestheticchannel.com/files/styles/article_featured_retina/public/AdobeStock_georgerudy_mandermalfiller107800015.jpeg?itok=kUh8Y3rS',
        thumbnail: 'https://www.theaestheticguide.com/sites/aestheticchannel.com/files/styles/article_featured_retina/public/AdobeStock_georgerudy_mandermalfiller107800015.jpeg?itok=kUh8Y3rS'
    },
    {
        original: 'https://d36zfg4d500s0g.cloudfront.net/cache/images/DT/up/dt/2017/01/ee88aa84f1f53666c8c79c3539f4308a-1188x668-.jpg',
        thumbnail: 'https://d36zfg4d500s0g.cloudfront.net/cache/images/DT/up/dt/2017/01/ee88aa84f1f53666c8c79c3539f4308a-1188x668-.jpg'
    }
]

class Home extends Component {
    constructor() {
        super();

    }
    render() {
        return <ImageGallery className="my-gallery"items={images}/>
    }
}

export default Home;