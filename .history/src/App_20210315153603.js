// import logo from './logo.svg';
// import { Fragment } from 'react';
import slider from './media/slider.jpg';
import style from './App.module.css';
import Navbar from './comoponents/Navbar';
import Footer from './comoponents/Footer';
import SearchBar from './comoponents/SearchBar';

function App() {
  return (
    <div className={style.app}>
    <Navbar />
      <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
