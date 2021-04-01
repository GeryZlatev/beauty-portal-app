import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Home.css';
import ReactPlayer from 'react-player';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';

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
    // {
    //     original: 'https://zdravenportal.com/uploads/x2015/09/29/555_415-50499c46439a03a4700bd14522bb29a4.jpg',
    //     thumbnail: 'https://zdravenportal.com/uploads/x2015/09/29/555_415-50499c46439a03a4700bd14522bb29a4.jpg'
    // }
]

class Home extends Component {
    constructor() {
        super();

    }
    render() {
        return (
        <>
                <ImageGallery className="my-gallery" items={images} />
                <VerticalHeaderLine>
Welcome to the era of dynamic aesthetics</VerticalHeaderLine>
                
                <div className="player-laser-soprano">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=pF1u_X5fKAI"
                    playing={true}
                    loop= {true}
                    width="850px"
                    height="580px"
                    style={{ margin: "100px auto" }}
                />   
                </div>
        </>
        )
    }
}

export default Home;