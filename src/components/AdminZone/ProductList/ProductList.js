import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import TableTemplate from '../TableTemplate/TableTemplate';
import { apiRoot, dataSources } from '../../../../clientConfig';
import axios from 'axios';
import '../AdminPage/AdminPage.less';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  componentDidMount = async () => {
    let response = await axios.get(`${dataSources.models}`);
    this.setState({
      models: response.data
    });
  };

  render() {
    const { models } = this.state;
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <div className="adminpage__desk">
            <h1>Stock</h1>
            <TableTemplate data={models}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
