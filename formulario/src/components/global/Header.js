import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


import './css/header.css';
import logo from './images/logo.svg';

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { title, items } = this.props;

    return (
      <div className="header">
        <header className="Logo">
          <div className="icono">
            <img src={logo} alt="logo" />
            <h1 className="App-title">{title}</h1>
          </div>
          
          <div className="lista">
            <ul className="Menu">
              {
                items && items.map(
                  (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                )
              }
            </ul>
          </div>
          <div className="entrada">
           <input type="email" placeholder="Email:" />
           <input type="password" placeholder="Password:" />
           <button>Log in</button>
          </div> 
        </header>
      </div>  
    );
  }
}