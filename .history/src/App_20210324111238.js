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
import { AuthProvider } from './components/contexts/AuthContext';
import {auth } from './services/firebase'


const App = () => {
  // const [user, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailErr, setEmailErr] = useState('');
  // const [passwordErr, setPasswordErr] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('')
  }

  const clearErrors = () => {
    setEmailErr('');
    setPasswordErr('');
  }


  useEffect(() => {
    authListener();
  }, [])


const handleLogin = () => {
    clearErrors();
    auth
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
            setEmailErr(err.message);
            break;
        case 'auth/wrong-password':
            setPasswordErr(err.message);
            break;
    }
    })
}

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

const handleLogout = () => {
    auth.signOut()
}

const authListener = () => {
    auth
    .onAuthStateChanged(user => {
        if (user) {
        clearInputs()
        setUser(user)
        } else {
        setUser('')
    }
    })
}
  
    return (
      <div className={style.app}>
        <AuthProvider>
        <Navbar />
        <SearchBar />
        {/* <div className="image-wrapper">
      <img src={slider}  alt="beauty woman"/>
      </div> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patients"  exact component={HomePatients} />
          <Route path="/about" component={About} />
          <Route path="/services" component={FindServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route
              path="/patients/register"
              render={() => (
              <Register
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailErr={emailErr}
              passwordErr={ passwordErr}
                />
              )}
          />
          <Route
              path="/patients/login"
              render={() => (
                <Login
              user={user}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailErr={emailErr}
              passwordErr={ passwordErr}
                />
              )}
          />
          <Route component={PageNotFound} />
        </Switch>
        <Advertising />
        <VerticalLine />
          <Footer />
          </AuthProvider>
      </div>
    )
  
}

export default App;
