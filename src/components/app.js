import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Settings from './modules/settings';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: {},
      curent: ''
    };
    this.resetData = this.resetData.bind(this);
  }

  resetData() {
    this.setState({data: []});
  }

  updateData(config) {
    this.setState(config);
  }
  
  render() {
    const { words, settings } = this.props;
    return (
      <div className='app'>
        <Settings
          data={settings}
          update={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { words, settings } = state;
  return {
    words: words.words || [],
    settings: settings.settings || {},
  };
}

export default connect(mapStateToProps)(App);
