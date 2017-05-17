'use strict';
import React from 'react'

const Video = (props) => (
  <div className="hero-section__bg">
	  <iframe
      className="hero-section__bg__video"
      src={ props.link }
      width={ props.width }
      height={ props.height }
      allowFullScreen>
    </iframe>
  </div>
)

export default Video
