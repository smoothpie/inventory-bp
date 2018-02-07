import React, { Component } from 'react';
import axios from 'axios';
import TableTemplate from '../TableTemplate/TableTemplate';
import Recommendations from './Recomendations';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import '../AdminPage/AdminPage.less';

const style = {
  margin: 12
};

class ABC extends Component {
  state = {
    models: [],
    modelSales: [],
    totalSales: null,
    modelShares: [],
    accumShares: [],
    groups: [],
    results: [],
    loaded: false
  };

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  getModels = async () => {
    this.setState({ loading: true });
    let response = await axios.get('/api/store/all/models');
    return response.data;
  }

  calculateModelSales = async () => {
    this.setState({ loading: true });
    let models = await this.sortBySales();
    let sales = [];
    models.forEach((model) => {
      var sum = model.orders.reduce((sum, order) => {
        return sum + order.size*model.price;
      }, 0);
      sales.push(sum);
    });
    return sales;
  }

  sortBySales = async () => {
    this.setState({ loading: true });
    let models = await this.getModels();
    models.sort((a,b) => {
      let m1 = a.orders.reduce((sum, order) => {
        return sum + order.size*a.price;
      }, 0);
      let m2 = b.orders.reduce((sum, order) => {
        return sum + order.size*b.price;
      }, 0);
      if (m1 > m2) {
        return -1;
      };
      if (m1 < m2) {
        return 1;
      }
      return 0;
    });
    return models;
  }

  calculateTotalSales = async () => {
    this.setState({ loading: true });
    let modelSales = await this.calculateModelSales();
    let sum = modelSales.reduce((sum, amount) => {
        return sum + amount;
    }, 0);
    return sum;
  }

  calculateModelShares = async () => {
    this.setState({ loading: true });
    let shares = [];
    let modelSales = await this.calculateModelSales();
    let totalSales = await this.calculateTotalSales();
    modelSales.forEach((amount) => {
      let share = amount / totalSales;
      shares.push(+share.toFixed(2));
    });
    return shares;
  }

  calculateAccumShares = async () => {
    this.setState({ loading: true });
    let accumShares = [];
    let modelShares = await this.calculateModelShares();
    let sum = modelShares.reduce((sum, share, i) => {
      return accumShares[i] = +(sum + share).toFixed(2);
    }, 0);
    return accumShares;
  }

  calculateGroups = async () => {
    this.setState({ loading: true });
    let groups = [];
    let accumShares = await this.calculateAccumShares();
    accumShares.forEach((share) => {
      if (share*100 < 80) {
        groups.push('A');
      } else if (share*100 > 80 && share*100 < 95) {
        groups.push('B');
      } else groups.push('C');
    });
    return groups;
  }

  doAnalysis = async () => {
    let models = await this.sortBySales();
    await this.setStateAsync({ models });

    await this.setStateAsync({ modelSales });
    let totalSales = await this.calculateTotalSales();
    await this.setStateAsync({ totalSales });

    let modelShares = await this.calculateModelShares();
    await this.setStateAsync({ modelShares });

    let accumShares = await this.calculateAccumShares();
    await this.setStateAsync({ accumShares });

    let groups = await this.calculateGroups();
    await this.setStateAsync({ groups });

    let results = [];
    models.map(async (model, i) => {
      let dataObject = Object.assign({}, {
        model: model.id,
        modelSales: modelSales[i],
        totalSales: totalSales,
        modelShare: modelShares[i],
        accumShare: accumShares[i],
        group: groups[i]
      });
      results.push(dataObject);
    });
    await this.setStateAsync({ results });
    await this.setStateAsync({
      loading: false,
      loaded: true
    });
  }

  render() {
    return(
      <div className="adminpage__desk">
        <h3>ABC-ANALYSIS</h3>
        <span>ABC analysis is an inventory categorization technique. It provides a mechanism for identifying items that will have a significant impact on overall inventory cost, while also providing a mechanism for identifying different categories of stock that will require different management and controls.</span>
        {this.state.loaded ? (
          <div>
            <TableTemplate data={this.state.results} />
            <Recommendations
              models={this.state.models}
              abcResults = {this.state.results}
              modelSales={this.state.modelSales}
              groups={this.state.groups}
            />
          </div>
        ) : <RaisedButton
              label="Calculate ABC-groups"
              style={style}
              onClick={this.doAnalysis}
             />
        }
      {this.state.loading ? (
        <div className="adminpage__loading">
          <CircularProgress />
          <p>Loading</p>
        </div>
      )
       : null}
      </div>
    );
  }
}

export default ABC;
