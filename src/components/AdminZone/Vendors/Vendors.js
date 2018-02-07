import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import TableTemplate from '../TableTemplate/TableTemplate';
import axios from 'axios';
import '../AdminPage/AdminPage.less';

class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    };
  }

  componentDidMount = async () => {
    let response = await axios.get('/api/store/all/vendors');
    this.setState({
      vendors: response.data
    });
  }

  render() {
    const { vendors } = this.state;
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <div className="adminpage__desk">
            <h1>Vendors</h1>
            <TableTemplate data={vendors}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Vendors;
