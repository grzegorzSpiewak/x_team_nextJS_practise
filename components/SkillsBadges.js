'use strict';
import React from 'react'
import Link from 'next/link'

const renderItems = (items) => {
	return items.map((item) =>
    <Link href={ `${item.href}`} key={`${item.title}` }>
      <li className="skills__list__item">
			  <a className="skills__list__link" href={ `${item.href}`} title={`${item.title}` }>
				  <img className="skills__list__icon" alt={ `${item.alt}`} src={`${item.src}` } />
          <span className="skills__list__label" dangerouslySetInnerHTML={ {__html: item.label} }></span>
				</a>
			</li>
		</Link>
	)
}

const SkillsBadges = (props) => (
	<ul className="skills__list">
	  { renderItems(props.logo) }
	</ul>
)

export default SkillsBadges
