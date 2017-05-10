'use strict'
import React from 'react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Homepage from '../data/Homepage'

const Layout = ({ children }, props) => (
  <div>
    <Menu data={ Homepage.Menu.Items } />
    {children}
    <Footer />
  </div>
)

export default Layout
