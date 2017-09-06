import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class Switch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: false,
      active: 'disable'
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || false,
      active: this.props.value ? 'active' : 'disable',
    })
  }

  enabledHead(){
    this.setState({
      value: true,
      active: 'active'
    })
  }

  disableHead(){
    this.setState({
      value: false,
      active: 'disable'
    })
  }

  //update({});

  render() {

    return (
      <div className={"switch " + this.state.active}>
        <div>
          <span className="enabled" onClick={this.enabledHead.bind(this)}>
            {'enabled'}
          </span>
          <span className="disable" onClick={this.disableHead.bind(this)}>
            {'disable'}
          </span>
        </div>
      </div>
    );
  }
}

export default Switch;
