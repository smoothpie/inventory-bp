import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import ModelKnownParams from './ModelKnownParams';
import ModelCountedParams from './ModelCountedParams';
import '../AdminPage/AdminPage.less';

const style = {
  margin: 12
};

class InventoryModel extends Component {
  state = {
    optimalOrder: null,
    dayDemand: null,
    expectedConsumption: null,
    orderInterval: null,
    safetyStock: null,
    orderPoint: null,
    maxStock: null,
    results: {},
    loaded: false
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  calcOptimalOrderSize = async () => {
    this.setState({ loading: true });
    const { abcResults, models } = this.props.location.state;
    let demand = models[0].orders.length;
    let price = models[0].price;
    let orderCost = price / 2;
    let storingCost = +(price / 3 / 5);
    return Math.ceil(Math.sqrt(2 * orderCost * demand / storingCost));
  }

  calcDayDemand = async () => {
    this.setState({ loading: true });
    const { abcResults, models } = this.props.location.state;
    let demand = models[0].orders.length;
    return Math.ceil(demand / 300);
  }

  calcInterval = async () => {
    this.setState({ loading: true });
    const { abcResults, models } = this.props.location.state;
    let demand = models[0].orders.length;
    let optimalOrder = await this.calcOptimalOrderSize();
    return Math.ceil(300 * demand / optimalOrder);
  }

  calcExpectedConsumption = async () => {
    this.setState({ loading: true });
    let dayDemand = await this.calcDayDemand();
    let timeToArrive = 3;
    return Math.ceil(timeToArrive * dayDemand);
  }

  calcSafetyStock = async () => {
    this.setState({ loading: true });
    let delay = 1;
    let timeToArrive = 3;
    let dayDemand = await this.calcDayDemand();
    let demandVariation = 2;
    return Math.ceil(Math.sqrt(timeToArrive * Math.pow(demandVariation, 2) + Math.pow(dayDemand, 2) * Math.pow(delay, 2)));
  }

  calcOrderPoint = async () => {
    this.setState({ loading: true });
    let expectedConsumption = await this.calcExpectedConsumption();
    let safetyStock = await this.calcSafetyStock();
    return Math.ceil(expectedConsumption + safetyStock);
  }

  calcMaxStock = async () => {
    this.setState({ loading: true });
    let safetyStock = await this.calcSafetyStock();
    let dayDemand = await this.calcDayDemand();
    let orderInterval = await this.calcInterval();
    return Math.ceil(orderInterval * dayDemand + safetyStock);
  }

  calcParams = async () => {
    const { models, abcResults } = this.props.location.state;
    await this.setStateAsync({ loading: true });

    let optimalOrder = await this.calcOptimalOrderSize();
    await this.setStateAsync({ optimalOrder });

    let dayDemand = await this.calcDayDemand();
    await this.setStateAsync({ dayDemand });

    let orderInterval = await this.calcInterval();
    await this.setStateAsync({ orderInterval });

    let expectedConsumption = await this.calcExpectedConsumption();
    await this.setStateAsync({ expectedConsumption });

    let safetyStock = await this.calcSafetyStock();
    await this.setStateAsync({ safetyStock });

    let orderPoint = await this.calcOrderPoint();
    await this.setStateAsync({ orderPoint });

    let maxStock = await this.calcMaxStock();
    await this.setStateAsync({ maxStock });

    let modelParams = await Object.assign({}, {
      demand: models[0].orders.length,
      optimalOrder,
      dayDemand,
      orderInterval,
      expectedConsumption,
      safetyStock,
      orderPoint,
      maxStock
    });
    await this.setStateAsync({ results: modelParams });
    await this.setStateAsync({
      loading: false,
      loaded: true
    });
  }

  render() {
    let {
      modelSales,
      optimalOrder,
      dayDemand,
      expectedConsumption,
      orderInterval,
      safetyStock,
      orderPoint,
      maxStock
    } = this.state;
    return(
      <div className="adminpage">
        <h1>InventoryBP</h1>
        <div className="adminpage__children">
          <Navigation />
          <div className="adminpage__desk">
            <h3>Inventory Model for Jeans№2</h3>
            {this.state.loaded ? (
              <div>
                <ModelKnownParams
                  modelSales={this.props.location.state.abcResults[0].modelSales}
                  dayDemand={dayDemand}
                  expectedConsumption={expectedConsumption}
                />
                <ModelCountedParams
                  optimalOrder={optimalOrder}
                  orderInterval={orderInterval}
                  orderPoint={orderPoint}
                  safetyStock={safetyStock}
                  maxStock={maxStock}
                />
              </div>
            ) : <RaisedButton
                  label="Calculate parameters"
                  style={style}
                  onClick={this.calcParams}
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
          </div>
        </div>
    );
  }
}

export default InventoryModel;
