// import logo from './logo.svg';
import { Fragment } from 'react';
import slider from './media/slider.jpg';
import style from './App.module.css';
import Navbar from './comoponents/Navbar';

function App() {
  return (
    <Fragment>
    <Navbar />
      <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div>
    </Fragment>

  );
}

export default App;
