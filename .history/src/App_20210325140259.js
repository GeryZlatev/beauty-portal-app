import React, { useState, useEffect } from 'react';
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
import VerticalLine from './components/VerticalLine';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import PageNotFound from './components/PageNotFound';
// import { AuthProvider } from './components/contexts/AuthContext';
import { auth } from './services/firebase';
export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
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



const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

//   const clearInputs = () => {
//     setEmail('');
//     setPassword('')
//   }




//   useEffect(() => {
//     authListener();
//   }, [])




// const handleSignup = () => {
//     clearErrors()
//     auth
//         .createUserWithEmailAndPassword(email, password)
//         .then(res => {
//         setUser(res.user.uid)
//         })
//     .catch(err => {
//         switch (err.code) {
//         case 'auth/email-already-in-use':
//         case 'auth/invalid-email':
//             setEmailErr(err.message);
//             break;
//         case 'auth/weak-password':
//             setPasswordErr(err.message);
//             break;
//         }
//     })
// }

// const handleLogout = () => {
//     auth.signOut()
// }

// const authListener = () => {
//     auth
//     .onAuthStateChanged(user => {
//         if (user) {
//         clearInputs()
//         setUser(user)
//         } else {
//         setUser('')
//     }
//     })
// }
  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
    }}
    >
      <div className={style.app}>
        
        <Navbar user={ state.user}/>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={!state.isAuthenticated ? Home : HomePatients} />
          {/* <Route path="/patients"  exact component={HomePatients} /> */}
          <Route path="/about" component={About} />
          <Route path="/services" component={FindServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route
              path="/register" component={Register}/>
          <Route
              path="/login" component={Login}/>
          <Route component={PageNotFound} />
            
            {/* {routes.map((route) => {
              return (
              <Route
                key={route.path}
                path={route.path}
                component={route.componen}
              />
              )
            })} */}
        </Switch>
        <Advertising />
        <VerticalLine />
          <Footer />
      </div>
      </AuthContext.Provider>
    )
  
}

export default App;
