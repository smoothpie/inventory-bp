import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';
import './ModelPage.less';

const propTypes = {

};

const styles = {
  card: {
    width: '50%',
    backgroundColor: 'rgb(224, 225, 223)'
  },
  button: {
    margin: '13px'
  }
}


class ModelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderSize: 1,
      ordered: false
    };
  }

  handleSizeChange = e => {
    this.setState({
      orderSize: e.target.value
    });
  };

  handleOrder = async e => {
    e.preventDefault();
    const { orderSize } = this.state;
    const { category, modelId, models } = this.props.location.state;
    let orderedModel;
    models.forEach((model, i, models) => {
      if (model.id === modelId) {
        orderedModel = model;
      }
    });
    let response = await axios.post('/api/store/all/orders/create', {
      size: orderSize,
      modelId: modelId
    });
    axios.put(
      `http://localhost:3000/api/store/${category}/models/${modelId}`,
      {"amount": orderedModel.amount - orderSize},
      {
        "Content-Type": "application/json"
      })
      .then((response) => {
        console.log(response);
      });
    this.setState({
      ordered: true
    })
  }

  render(){
    const { orderSize } = this.state;
    const { modelId, label, image } = this.props.location.state;
    return(
      <div className="modelpage">
        <NavBar />
        <div className="modelpage__info">
          <img src={"../../../www/images/"+image} />
          <Card style={styles.card}>
            <CardTitle title={`${label}`} />
            <CardText>This model is so totally cool. How many u wanna order?</CardText>
            <input
              className="modelpage__input"
              type="number"
              onChange={this.handleSizeChange}
              value={orderSize}
              />
            <CardActions>
              <RaisedButton
                style={styles.button}
                label="Order"
                onClick={this.handleOrder}
                />
            </CardActions>
            Hey
          </Card>
          <Snackbar
            open={this.state.ordered}
            message="Ordered for now!"
            autoHideDuration={4000}
            />
        </div>
      </div>
    );
  }
}

export default ModelPage;
