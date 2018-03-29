import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    <MuiThemeProvider>
      <div className="App">
        <Header title="JustFlyCompany" items={items} />
        <Content body={children} />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
