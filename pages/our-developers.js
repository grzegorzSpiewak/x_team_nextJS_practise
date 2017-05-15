import React from 'react'
import Layout from '../templates/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <p>Our Developers Page</p>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </Layout>
);
