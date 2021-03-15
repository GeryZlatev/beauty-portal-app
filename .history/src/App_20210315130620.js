// import logo from './logo.svg';
// import { Fragment } from 'react';
import slider from './media/slider.jpg';
import style from './App.module.css';
import Navbar from './comoponents/Navbar';

function App() {
  return (
    <div className={style.app}>
    <Navbar />
      <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div>
    </div>

  );
}

export default App;
