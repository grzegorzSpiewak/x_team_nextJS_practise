'use strict';
import React from 'react'
import Brands from '../Brands/Brands'

const Herobrands = (props) => (
  <section className={`hero-section hero-section--{props.layout} hero-section--${props.data.style}`}>
    <div className={`hero-section__wrap hero-section__wrap--${props.data.layout}`}>
      <h1 className={`hero-section__title hero-section__title--${props.data.layout}`} dangerouslySetInnerHTML={{__html: props.data.title}}>
      </h1>
      <div className={`hero-section__action hero-section__action--${props.data.layout}`}>
        <h2 className={`hero-section__caption hero-section__caption--${props.data.layout}`}>
          {props.data.caption}
        </h2>

      </div>
    </div>
    <Brands />
  </section>
)

export default Herobrands
