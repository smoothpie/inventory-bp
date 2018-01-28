import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.less';

const NavBar = (props) => {
  return(
    <div className="navbar">
      <div className="navbar__title">
        <h3>YOUR.JEANS</h3>
      </div>
      <div className="navbar__links">
        <Link style={{ textDecoration: 'none', margin: '5px', color: '#cecece', textTransform: 'uppercase' }} to="/">Магазин</Link>
        <Link style={{ textDecoration: 'none', margin: '5px', color: '#cecece', textTransform: 'uppercase' }} to="/about">О нас</Link>
        <Link style={{ textDecoration: 'none', margin: '5px', color: '#cecece', textTransform: 'uppercase' }} to="/store">Блог</Link>
        <Link style={{ textDecoration: 'none', margin: '5px', color: '#cecece', textTransform: 'uppercase' }} to="/blog">Контакты</Link>
      </div>
      <div className="navbar__admin">
        <Link style={{ textDecoration: 'none', margin: '5px', color: '#cecece', textTransform: 'uppercase' }} to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default NavBar;
