import React from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomePatients from './components/HomePatients';
import About from './components/About';
import SearchBar from './components/SearchBar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Advertising from './components/Advertising';
import FindServices from './components/FindServices';
import VerticalLine from './Shared/VerticalLine';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import PageNotFound from './components/PageNotFound';
import Specialist from './components/Specialist';
import FindDoctor from './components/FindDoctor';
export const AuthContext = React.createContext();


const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') || false,
  user: localStorage.getItem('user') || null,
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  favoriteProcedures: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        email: action.payload.email
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}



const App = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
    }}
    >
      <div className={style.app}>
        
        <Navbar user={state.user} email={state.email} />
        <SearchBar />
        <Switch>
          <Route path="/" exact component={!state.isAuthenticated ? Home : HomePatients} />
          <Route path="/about"  component={About} />
          <Route path="/services" exact component={FindServices} />
          <Route path="/services/aesthetic-dermatology"  component={FindServices} />
          <Route path="/services/laser-therapies"  component={FindServices} />
          <Route path="/services/agnes"  component={FindServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/specialist" component={ Specialist}/>
          <Route path="/doctors" component={ FindDoctor}/>
          <Route component={PageNotFound} />
          
        </Switch>
        <Advertising />
        <VerticalLine />
          <Footer />
      </div>
      </AuthContext.Provider>
    )
  
}

export default App;
