import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import TableTemplate from '../TableTemplate/TableTemplate';
import { apiRoot, dataSources } from '../../../../clientConfig';
import axios from 'axios';
import '../AdminPage/AdminPage.less';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount = async () => {
    let response = await axios.get(`${dataSources.orders}`);
    this.setState({
      orders: response.data
    });
  }

  render() {
    const { orders } = this.state;
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <div className="adminpage__desk">
            <h1>Sales</h1>
            <TableTemplate data={orders} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sales;
