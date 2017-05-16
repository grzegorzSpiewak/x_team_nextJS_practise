'use strict'
import React from 'react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Homepage from '../data/Homepage'

const Layout = ({ children }) => (
  <div>
    <Menu {...Homepage.Menu} />

      { children }

    <Footer />
  </div>
)

export default Layout
