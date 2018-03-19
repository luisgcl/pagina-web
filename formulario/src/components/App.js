import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

import Header from './global/Header';
import Content from './global/Content';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="JustFlyCompany" items={items} />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
