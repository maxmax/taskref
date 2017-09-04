import React, { Component } from 'react';
import {connect} from 'react-redux';
import Settings from './modules/settings';
import TrelloWr from './modules/trello';
//import * as actions from './actions';

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
    const { words, settings, trello } = this.props;

    return (
      <div className='app'>
        <TrelloWr data={trello} />
        <Settings
          data={settings}
          update={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { words, settings, trello, todo } = state;
  return {
    words: words.words,
    settings: settings.settings,
    trello: trello
  };
}

export default connect(mapStateToProps)(App);
