import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getColumns = () => {
    const { data } = this.props;
    if (data.length){
      let keys = Object.keys(data[0]);
      return keys;
    }
  }

  render() {
    const { data } = this.props;
    const columns = this.getColumns();
    const headerColumns = data.length ? columns.map((column, i) => {
      if (column != "orders") {
        return(
          <TableHeaderColumn key={i}>{column}</TableHeaderColumn>
        );
      }
    }) : null;
    const rows = data.map((item,i) => {
      return(
        <TableRow key={i}>
          {columns.map((column, i) => {
            if (typeof item[column] != "object") {
              return(
                <TableRowColumn key={i}>{item[column]}</TableRowColumn>
              );
            }
          })}
        </TableRow>
      );
    });
    return(
      <div>
        <Table >
          <TableHeader>
            <TableRow>
              {headerColumns}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TableTemplate;
