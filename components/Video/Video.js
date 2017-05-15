'use strict';
import React from 'react'

const createMarkup = () => {
  return {__html: 'webkitallowfullscreen mozallowfullscreen allowfullscreen'}
}

const Video = (props) => (
  <div className="hero__bg">
	  <iframe className="hero__bg__video" src={ props.link } width={ props.width } height={ props.height } dangerouslySetInnerHTML={ createMarkup() }></iframe>
  </div>
)

export default Video
