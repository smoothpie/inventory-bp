import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ModelCountedParams extends Component {
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

/*    const rows = data.map((item, i) => {
      return(
        <TableRow key={i}>
          <TableRowColumn>{Object.keys(item)[0]}</TableRowColumn>
          <TableRowColumn>{Object.values(item)[0]}</TableRowColumn>
        </TableRow>
      );
    });*/
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
              <TableRowColumn>Economical Order Size</TableRowColumn>
              <TableRowColumn>{optimalOrder}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Order Interval</TableRowColumn>
              <TableRowColumn>{orderInterval}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Safery Stock</TableRowColumn>
              <TableRowColumn>{safetyStock}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Order Point</TableRowColumn>
              <TableRowColumn>{orderPoint}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Max Stock</TableRowColumn>
              <TableRowColumn>{maxStock}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ModelCountedParams;
