import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <h1>Recommendations</h1>
        <Card>
          <CardHeader
            title="Group A"
            />
          <CardActions>
            <Link to={{
              pathname: '/admin/manage/inventory-model',
              state: { models: this.props.models,
                       abcResults: this.props.abcResults,
                       modelSales: this.props.modelSales,
                       groups: this.props.groups }
                  }}
                  >
              <FlatButton
                primary={true}
                label="Calculate management model"
                />
            </Link>
          </CardActions>
          <CardText>
            items are very important for an organization. Because of the high demand of these ‘A’ items, frequent value analysis is required. These are your fast moving and typically lower value items that drive the largest percentage of your target service levels and customer satisfaction rates
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Group B"
            />
          <CardActions>
            <FlatButton
              primary={true}
              label="Calculate management model"
            />
          </CardActions>
          <CardText>
            items are important, but of course less important than ‘A’ items and more important than ‘C’ items. These are typically mid range in inventory value and order frequency.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Group C"
            />
          <CardActions>
            <FlatButton
              primary={true}
              label="Calculate management model"
            />
          </CardActions>
          <CardText>
            items are marginally important. Typically, very low order frequency and high inventory value. These items are usually stocked with very low quantities or not at all due to the high carrying costs associated with the stock levels.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Recommendations;
