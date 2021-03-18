import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Firebase from 'firebase';
import style from './App.module.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchBar from './components/SearchBar';
import Advertising from './components/Advertising';
import FindServices from './components/FindServices';
import VerticalLine from './components/VerticalLine';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import PageNotFound from './components/PageNotFound';



class App extends Component{
  render() {
    return(
    <div className={style.app}>
      <Navbar />
      <SearchBar />
      {/* <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={FindServices}/>
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route component={ PageNotFound }/>
      </Switch>
      <Advertising/>
      <VerticalLine/>
      <Footer/>
    </div>

  );
}

export default App;
