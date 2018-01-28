import React, { Component } from 'react';
import '../AdminPage/AdminPage.less';
import Dashboard from '../Dashboard/Dashboard';

class Desk extends Component {

  render() {
    return(
      <div className="adminpage__desk">
        <Dashboard />

      </div>
    );
  }
}

export default Desk;
