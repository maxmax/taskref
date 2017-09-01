import React, { Component } from 'react';
import Home from './modules/home';

class TestApp extends Component {
  render() {
    const { inbox, words } = this.props;
    return (
      <div className='app'>
        <Home />
      </div>
    );
  }
}

export default TestApp;
