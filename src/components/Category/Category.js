import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Models from '../Models/Models';
import './Category.less';

const propTypes = {
  label: PropTypes.string,
  image: PropTypes.string
};

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }

  onMouseEnter = () => {
    this.setState({
      hovering: true
    });
  }

  onMouseLeave = () => {
    this.setState({
      hovering: false
    })
  }

  render(){
    const { label, image, selectedId} = this.props;
    return(
	    <li
        className="category"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        >

        <img src={"../../../www/images/"+this.props.image} />
        <div className="category__title">
          <Link to={{
                  pathname: `/store/${selectedId}`,
                  state: { category: selectedId }
                }}>
	          {label}
          </Link>
        </div>
	    </li>
    );
  }
}


Category.propTypes = propTypes;
export default Category;
