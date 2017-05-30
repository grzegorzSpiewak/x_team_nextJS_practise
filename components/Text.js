'use strict';
import React from 'react'

const Text = (props) => (
  <div className="text">
    <div className="wrap">
      <h3 className={`text__title text__title--${props.titleStyle}`}>
        {props.title}
      </h3>
      <p className="text__item">
        {props.text}
      </p>
    </div>
  </div>
)

export default Text
