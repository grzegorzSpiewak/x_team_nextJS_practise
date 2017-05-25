'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/Head'
import Layout from '../components/Layout'
import Link from 'next/link'
/**
 * Content
 */
import Homepage from '../data/Homepage'


export default class extends React.Component {

  render () {
    return (
      <div>
        <Head {...Homepage.Head}/>
        <Layout>
          <p>This is unleash</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </Layout>
      </div>
    )
  }
}
