import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModelPage from '../ModelPage/ModelPage';
import './Model.less';

const propTypes = {
  label: PropTypes.string
};

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    const {
      label,
      selectedId,
      models,
      image,
      category
    } = this.props;
    return(
	    <li className="model">
        <img src={"../../../www/images/"+image} />
        <div className="model__title">
          <Link
            to={{
              pathname: `/store/${category}/models/${selectedId}`,
              state: { models,
                       modelId: this.props.selectedId,
                       label,
                       image,
                       category }
            }}
            >
	          {label}
          </Link>
        </div>
	    </li>
    );
  }
}

Model.propTypes = propTypes;
export default Model;
