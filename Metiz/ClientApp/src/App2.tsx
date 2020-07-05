import * as React from 'react';
import { Route } from 'react-router';
import AdminLayout from './components/admin/AdminLayout';
import Home from './components/home/Home';
import Adm from './components/admin/Admin';

import './custom.css'

export default () => (
    <AdminLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Adm}/>
    </AdminLayout>
);
