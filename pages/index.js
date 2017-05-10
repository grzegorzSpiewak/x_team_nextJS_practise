import React from 'react'
import Layout from '../templates/Layout'
import Herobrands from '../components/Herobrands/Herobrands'
import Homepage from '../data/Homepage'

export default () => (
  <Layout>
    <Herobrands data={ Homepage.Hero }/>
  </Layout>
);
