import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import MainPage from '../MainPage/MainPage';
import Models from '../Models/Models';
import ModelPage from '../ModelPage/ModelPage';
import AdminPage from '../AdminZone/AdminPage/AdminPage';
import ProductList from '../AdminZone/ProductList/ProductList';
import Sales from '../AdminZone/Sales/Sales';
import Vendors from '../AdminZone/Vendors/Vendors';
import Management from '../AdminZone/Management/Management';
import InventoryModel from '../AdminZone/Management/InventoryModel';

const Home = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/home' component={MainPage} />
      <Route exact path='/store/:id' component={Models} />
      <Route path='/store/:id/models/:id' component={ModelPage} />
      <Route exact path='/admin' component={AdminPage} />
      <Route path='/admin/stock' component={ProductList} />
      <Route path='/admin/sales' component={Sales} />
      <Route path='/admin/vendors' component={Vendors} />
      <Route exact path='/admin/manage' component={Management} />
      <Route path='/admin/manage/inventory-model' component={InventoryModel} />
    </Switch>
  );
};

export default Home;
