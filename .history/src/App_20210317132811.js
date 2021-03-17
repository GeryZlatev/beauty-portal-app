// import logo from './logo.svg';
// import { Fragment } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import slider from './media/slider.jpg';
import style from './App.module.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <SearchBar />
      <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
