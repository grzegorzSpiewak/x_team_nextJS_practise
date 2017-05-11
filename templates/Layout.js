'use strict'
import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Homepage from '../data/Homepage'

const Layout = ({ children }, props) => (
  <div>
    <Head>
      <title>X-Team</title>
      <link rel='stylesheet' href='/static/css/hero.css' />
    </Head>
    <Menu data={ Homepage.Menu.Items } />
    {children}
    <Footer />
  </div>
)

export default Layout
