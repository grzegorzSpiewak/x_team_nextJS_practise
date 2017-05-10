'use strict';
import React from 'react'
import cx from 'classnames'

const Button = (props) => {
  const classNames = cx('btn', {
    'btn--big': props.big
  })
  const mediabox = cx({
    'mediabox': props.overlay
  })
  const setTarget = cx({
    'target="_blank"': props.newTab
  })
  return <a href= {props.href} title={props.title} className={classNames}>{props.anchor}</a>

}

export default Button
