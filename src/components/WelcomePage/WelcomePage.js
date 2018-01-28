import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import './WelcomePage.less';

class WelcomePage extends Component {

  render() {
    return(
      <div className="welcome-page">
        <div className="welcome-page__background"></div>
        <div className="welcome-page__box">
          <h1>Hey. Want some perfect jeans?</h1>
          <Link to='/home'>
            <button
              type="button"
              className="welcome-page__button"
              >
              Hell yeah!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default WelcomePage;
