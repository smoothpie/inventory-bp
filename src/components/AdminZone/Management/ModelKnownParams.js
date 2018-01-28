import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ModelKnownParams extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
    } = this.props;
    return(
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Parameter</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>Total Demand</TableRowColumn>
              <TableRowColumn>{modelSales/43}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Day Demand</TableRowColumn>
              <TableRowColumn>{dayDemand}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Order fulfillment time</TableRowColumn>
              <TableRowColumn>3</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Possible arrival delay</TableRowColumn>
              <TableRowColumn>1</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Expected Consumption</TableRowColumn>
              <TableRowColumn>{expectedConsumption}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ModelKnownParams;
