import React, { Component } from 'react'
import Slider from 'react-rangeslider'

//TODO: this must be done)
//min={Number}
//max={Number}
//step={Number}
//value={Number}
//orientation={String}
//reverse={Boolean}
//tooltip={Boolean}
//labels={Object}
//format={Function}
//onChangeStart={Function}
//onChange={Function}
//onChangeComplete={Function}

function Range({label, min = 0, value = 0}) {

  const slideOnChange = e => {
    console.log("slideOnChange!");
  }

  return (
    <div className='range'>
      <label>{label}</label>
      <section>
        <div className='min'>{min}</div>
        <Slider
          min={min}
          value={value}
          onChange={slideOnChange}
        />
        <div className='value'>{value}</div>
      </section>
    </div>
  )
};

export default Range;
