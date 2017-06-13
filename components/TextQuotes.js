'use strict'
import React from 'react'
import cx from 'classnames'

const renderQuotes = (quotes) => {
  return quotes.map((quote) =>
    <blockquote className="text__quote">
      <p>{ quote.text }</p>
      <cite className="text__cite">
        — { quote.author }
      </cite>
    </blockquote>
  )
}

const TextQuotes = (props) => (
  <div className={ cx('text text--quotes', { 'text text--quotes--has': props.hasQuotes}) }>
    <div className="wrap">
      { renderQuotes(props.quotes) }
    </div>
  </div>

)

export default TextQuotes
