import React from 'react';
import Welcome from '../Welcome/Welcome';

class Dashboard extends React.Component {

  render(){
    return(
      <div className="dashboard">
        <Welcome />
      </div>
    );
  }
}

export default Welcome;
