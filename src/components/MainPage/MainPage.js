import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Category from '../Category/Category';
import axios from 'axios';
import { apiRoot } from '../../../clientConfig';
import './MainPage.less';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    const { categories } = this.state;
    let response = await axios.get(`${apiRoot}/api/store`);
      this.setState({
        categories: response.data
      });
  }

  renderCategories() {
    const { categories } = this.state;
    return categories.map((category) => (
      <Category
        key = {category.id}
        label = {category.title}
        image={category.image}
        selectedId = {category.id}
        />
    ));
  }

  render() {
    return(
      <div className="main-page">
        <NavBar />
        <div className="main-page__description">
          <h1>Your.Jeans - это сеть магазинов турецкой одежды в Минске. Подробнее о нас на ссылках вверху. А сейчас давайте найдем вам что-нибудь красивое.</h1>
        </div>
        <div className="main-page__categories">
          {this.renderCategories()}
        </div>
      </div>
    )
  }
}

export default MainPage;
