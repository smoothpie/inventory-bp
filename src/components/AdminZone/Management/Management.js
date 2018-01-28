import React, { Component }  from 'react';
import Navigation from '../Navigation/Navigation';
import ABC from './ABC';
import '../AdminPage/AdminPage.less';

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <div className="adminpage__desk">
            <h1>Management</h1>
            <ABC />
          </div>
        </div>
      </div>
    );
  }
}

export default Management;
