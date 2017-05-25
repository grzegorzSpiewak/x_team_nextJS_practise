'use strict';
import React from 'react'
import Link from 'next/link'
import Logo from './Common/Logo'
import Button from './Common/Button'
import cx from 'classnames'

const buttonProps = {
  href: '/hire-developers',
  anchor: 'Hire X-Team',
  title: 'Hire X-Team',
  big: false,
  style: ''
}

const renderItems = (items) => {
  return items.map((item) =>
   <Link
     href={ `${item.href}` }
     key={ `${item.title}` }
     className="menu__item"
     role="menuitem"
   >
     <li
       className="menu__item"
       role="menuitem"
     >
       <a
         href={`${item.href}`}
         title={`${item.title}`}
         className={ cx('menu__link', {'menu__link--current': item.currentPage}) }
         >
         {item.anchor}
      </a>
    </li>
  </Link>
 )
}

const Menu = (props) => (
  <header className="menu">
    <div className="wrap">
      <a href="/" className="menu__logo">
        <Logo />
      </a>
      <button className="menu__toggle"><span className="menu__toggle__line">menu</span></button>
      <nav className="menu__menubar">
        <ul role="menubar" className="menu__list">
          { renderItems(props.Items) }
          <li className="menu__item">{ Button(buttonProps) }</li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Menu
