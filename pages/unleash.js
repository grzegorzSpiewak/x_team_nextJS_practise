'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/Head/Head'
import Layout from '../templates/Layout'
import Link from 'next/link'
/**
 * Content
 */
import Homepage from '../data/Homepage'


export default () => (
  <div>
    <Head {...Homepage.Head}/>
    <Layout>
      <p>Unleash</p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Layout>
  </div>
);
