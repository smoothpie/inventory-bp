'use strict';

import React from 'react';
import App from './components/App';
import Models from './components/Models/Models';
import ModelPage from './components/ModelPage/ModelPage';
import AdminPage from './components/AdminZone/AdminPage/AdminPage';
import ProductList from './components/AdminZone/ProductList/ProductList';
import Sales from './components/AdminZone/Sales/Sales';

const websiteRoutes = {
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        getComponent(location, cb) {
          cb(null, App);
        }
      }
    },
    {
      path: '/admin',
      component: AdminPage
    },
    {
      path: '/admin/stock',
      component: ProductList
    },
    {
      path: '/admin/sales',
      component: Sales
    },
    {
      path: '/store/:id',
      indexRoute: {
        getComponent(location, cb) {
          console.log('location:', location);
          cb(null, () => <Models category={location.params.id} />);
        }
      }
    },
    {
      path: '/store/:id/models/:id',
      indexRoute: {
        getComponent(location, cb) {
          console.log('model location:', location);
          cb(null, () => <ModelPage
             category={location.params.id[0]}
             modelId={location.params.id[1]}
             />);
        }
      }
    }
  ]};

export default websiteRoutes;
