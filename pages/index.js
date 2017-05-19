'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/Head/Head'
import Layout from '../templates/Layout'
import Herobrands from '../components/Herobrands/Herobrands'
import Video from '../components/Video/Video'
import Cavalry from '../components/Cavalry/Cavalry'
import VideoFilter from '../components/VideoFilter/VideoFilter'
import VideoQuote from '../components/VideoQuote/VideoQuote'
import CheckList from '../components/CheckList/CheckList'
import SectionCutout from '../components/SectionCutout/SectionCutout'
import Quotes from '../components/Quotes/Quotes'
import Skills from '../components/Skills/Skills'
import Hire from '../components/Hire/Hire'
/**
 * Content
 */
import Homepage from '../data/Homepage'

export default () => (
  <div>
    <Head {...Homepage.Head}/>
    <Layout>
      <Herobrands {...Homepage.Hero}/>
      <Video {...Homepage.Video}/>
      <Cavalry {...Homepage.Cavalry}/>
      <VideoFilter {...Homepage.VideoFilter}/>
      <CheckList {...Homepage.CheckList}/>
      <SectionCutout {...Homepage.Hire10Years}/>
      <SectionCutout {...Homepage.NeverStop}/>
      <SectionCutout {...Homepage.Ordinary}/>
      <Quotes {...Homepage.Quotes}/>
      <Skills {...Homepage.Skills}/>
      <Hire {...Homepage.Hire}/>
    </Layout>
  </div>
);
