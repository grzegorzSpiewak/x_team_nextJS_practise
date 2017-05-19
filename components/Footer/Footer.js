'use strict';
import React from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'
import FooterData from '../../data/FooterData'

const renderItems = (items) => {
  return items.map((item) =>
    <Link href={ `${item.href}` } key={ `${item.title}` }>
      <li className={`footer__item ${item.mobile ? 'footer__item--mobile' : ''}`}>
        <a className="footer__link" href= { `${item.href}` }> { item.title } </a>
      </li>
    </Link>
  )
}

const renderColumn = (items) => {
  return (
    <div className="footer__column">
      <h4 className="footer__title">
        { items.title }
      </h4>
      <ul className="footer__list">
        { renderItems(items.links) }
      </ul>
    </div>
  )
}

const Footer = (props) => (
  <footer className="footer">
		<section className="footer__links block">
			<div className="wrap">
        { renderColumn(props.Company) }
        { renderColumn(props.Resources) }
        { renderColumn(props.Hire) }
        { renderColumn(props.Connect) }
			</div>
		</section>
		<div className="footer__colophon">
			<div className="wrap">
				<div className="footer__colophon__logo">
          <Logo />
				</div>
				<address className="footer__colophon__address">
          <script>
            document.write(new Date().getFullYear())
          </script>
            &copy; All rights reserved. X-Company Pty Ltd.
          </address>
			</div>
		</div>
	</footer>
)

export default Footer
