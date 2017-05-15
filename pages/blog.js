import React from 'react'
import Layout from '../templates/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <p>This is Blog page</p>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </Layout>
);
