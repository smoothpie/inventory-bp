import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { apiRoot } from '../../../clientConfig';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Model from '../Model/Model';
import './Models.less';

const propTypes = {

}

export default
class Models extends Component {

  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  async componentDidMount () {
    const { category } = this.props.location.state;
    let response = await axios.get(`${apiRoot}/api/store/${category}/models`);
    this.setState({
      models: response.data
    });
  }

  renderModels = () => {
    const { models } = this.state;
    const { category } = this.props.location.state;
    return models.map((model) => (
      <Model
        key = {model.id}
        label = {model.title}
        image = {model.image}
        selectedId = {model.id}
        category = {category}
        models = {models}
        />
    ));
  }

  render() {
    const { models } = this.state;
    const { category } = this.props.location.state;
    let storeTree = models.map(model => {
      return(
        <li key={model.id}>
          <Link to={{
                  pathname: `/store/${category.id}/models/${model.id}`
                }}>
            {model.title}
          </Link>
        </li>
      )
    });
    return(
      <div className="category-page">
        <NavBar />
        <div className="category__description">
          <h1>Момы - это отличные свободные джинсы. Они были модными раньше и модные сейчас. Девчонки в сериале Друзья носили Момы.</h1>
        </div>
        <div className="category__store">
          <div className="store__tree">
            <ul>
              {storeTree}
            </ul>
          </div>
          <div className="category__models">
            {this.renderModels()}
          </div>
        </div>
      </div>
    );
  }
}

Models.propTypes = propTypes;
