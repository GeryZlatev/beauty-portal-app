// import logo from './logo.svg';
import { Fragment } from 'react';
import imageOne from '../media/imageOne.jpg';
import './App.css';
import Navbar from './comoponents/Navbar';

function App() {
  return (
    <Fragment>
    <Navbar />
      <div className="image-wrapper">
      <img src={imageOne} className={ style.image} alt="beauty woman"/>
      </div>
    </Fragment>

  );
}

export default App;
