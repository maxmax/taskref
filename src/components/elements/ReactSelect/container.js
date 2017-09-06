import React, { Component } from 'react';
import Select from 'react-select';

class ReactSelectContainer extends Component {
  constructor() {
    super()
    this.state = {
      currency: 0,
      option: [],
      label: '',
      disabled: false
    }
  }

  componentDidMount() {
    this.setState({
      currency: this.props.value || 0,
      option: this.props.option || [],
      label: this.props.label,
      disabled: this.props.disabled
    })
  }

  updateState(newCurrency) {
    this.setState({
      currency: newCurrency.value
    });
  }

  render() {
    return (<div className='react-select form-group'>
      <label>{this.props.label}</label>
      <Select
        name="form-field-name"
        value={this.state.currency}
        options={this.state.option}
        onChange={this.updateState.bind(this)}
        disabled={this.state.disabled}
      />
    </div>);
  }
}

export default ReactSelectContainer;
