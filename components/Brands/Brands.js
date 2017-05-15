'use strict'
import React from 'react'
import cx from 'classnames'

const renderItems = (items) => {
  return items.map((item) =>
    <li className={ `brands__logo brands__logo--${ item.name }`} key={ item.name } >
      <img className={ `brands__logo__image` } src={ `/images/brands/${ item.logo }` } />
    </li>
  )
}

const Brands = (props) => (
  <section className={ cx('brands', { 'brands--hero': props.text.onHero }) }>
    <div className="wrap">
      <h2 className={ cx('brands__title', { 'brands__title--hidden': props.text.noTitle }) || cx('', { 'brands__title--gray': props.text.gray}) }>
        { props.text.title }
      </h2>
      <ul className="brands__logos">
        { renderItems(props.img) }
      </ul>
    </div>
  </section>
)

export default Brands
