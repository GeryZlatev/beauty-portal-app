// import logo from './logo.svg';
// import { Fragment } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
// import slider from './media/slider.jpg';
import style from './App.module.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchBar from './components/SearchBar';
import VerticalLine from './components/VerticalLine';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <SearchBar />
      {/* <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route component={ PageNotFound }/>
      </Switch>
      <VerticalLine/>
      <Footer/>
    </div>

  );
}

export default App;
