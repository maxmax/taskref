import React, { Component } from 'react';
import {connect} from 'react-redux';
import Settings from './modules/settings';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: {},
      curent: {
        test: 0
      }
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
        <Settings
          data={settings}
          update={this.updateData.bind(this)}
          curent={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { words, settings, todo } = state;
  return {
    words: words.words,
    settings: settings.settings
  };
}

//function mapDispatchToProps (dispatch) {
//  //onAdd: (item) => dispatch(addItem(item))
//}
//export default connect(mapStateToProps,mapDispatchToProps)(App);

export default connect(mapStateToProps)(App);
