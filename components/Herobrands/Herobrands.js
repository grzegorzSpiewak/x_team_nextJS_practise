'use strict';
import React from 'react'
import Brands from '../Brands/Brands'
import BrandsData from '../../data/BrandsData'
import Button from '../Common/Button'

const buttonProps = {
  href: 'https://www.youtube.com/watch?v=P5oVuk5M50s',
  anchor: 'Watch Video',
  title: 'Watch Video',
  overlay: true,
  big: true
}

const Herobrands = (props) => (
  <section className={ `hero-section hero-section--${props.layout} hero-section--${props.style}` }>
    <div className={ `hero-section__wrap hero-section__wrap--${props.layout}` }>
      <h1 className={ `hero-section__title hero-section__title--${props.layout}` } dangerouslySetInnerHTML={ {__html: props.title} }></h1>
      <div className={ `hero-section__action hero-section__action--${props.layout}` }>
        <h2 className={ `hero-section__caption hero-section__caption--${props.layout}` }>
          {props.caption}
        </h2>
        { Button(buttonProps) }
      </div>
    </div>
    <Brands {...BrandsData}/>
  </section>
)

export default Herobrands
