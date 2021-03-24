import React from 'react';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Home from '../components/Home';
import HomePatients from '../components/HomePatients';
import About from '../components/About';
import FindServices from '../components/FindServices';
import PageNotFound from '../components/PageNotFound';
import PrivacyPolicy from '../components/PrivacyPolicy';


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/patients',
        component: HomePatients
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/services',
        component: FindServices
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy
    },
    {
        path: '/patients/register',
        component: Register
    },
    {
        path: '/patients/login',
        component: Login
    },
    {
        path: '',
        componen: PageNotFound
    }

]

export default routes;

{/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patients"  exact component={HomePatients} />
          <Route path="/about" component={About} />
          <Route path="/services" component={FindServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route
              path="/patients/register" component={Register}/>
          <Route
              path="/patients/login" component={Login}/>
          <Route component={PageNotFound} />
        </Switch> */}