import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/catalog' component={Catalog}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
    </Layout>
);
