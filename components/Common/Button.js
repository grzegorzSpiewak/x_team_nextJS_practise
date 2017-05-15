
'use strict';
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

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
  return (
    <Link href={ `${props.href}` }>
      <a href={ props.href } title={ props.title } className={ classNames }>{ props.anchor }</a>
    </Link>
  )


}

export default Button
