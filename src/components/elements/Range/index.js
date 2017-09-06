import React, { Component } from 'react';
import Slider from 'react-rangeslider';

class Range extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: 10
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    })
  }

  handleChange(value){
    this.setState({
      value: value
    })
  }

  //handleChangeComplete(){
  //  console.log('Change event completed')
  //}

  render() {
    const { value } = this.state;
    const { label, min, max } = this.props;

    return (
      <div className='range'>
        <label>{label}</label>
        <section>
          <div className='min'>{min}</div>
          <Slider
            min={min}
            max={max}
            value={value}
            onChange={this.handleChange.bind(this)}
          />
          <div className='value'>{max}</div>
        </section>
      </div>
    );
  }
}

export default Range;
