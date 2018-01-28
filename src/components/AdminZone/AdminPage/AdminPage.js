import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Desk from '../Desk/Desk';

class AdminPage extends Component {

  render() {
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <Desk />
        </div>
      </div>
    );
  }
}

export default AdminPage;
