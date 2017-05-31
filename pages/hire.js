'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/HeadHire'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Herobrands from '../components/Herobrands'
import Video from '../components/Video'
import Cavalry from '../components/Cavalry'
import VideoFilter from '../components/VideoFilter'
import DevsFed from '../components/DevsFed' //new (diffrent between cavalery)
import TextLanding from '../components/TextLanding' //new
import TextPosts from '../components/TextPosts'
import RelSkills from '../components/RelSkills'
/**
 * Content
 */
import HireData from '../data/HireData'
import Homepage from '../data/Homepage'
import FooterData from '../data/FooterData'

export default class extends React.Component {

  render () {
    const pageQueryTitle = this.props.url.query.title
    const pageName = pageQueryTitle.split('-')[0]
    const PageData = HireData[pageName]

    return (
      <div>
        <Head {...PageData} />
        <div className="landing-tech">
          <TextLanding { ...PageData.TextLanding } />
          <Menu { ...Homepage.Menu } />
          <Herobrands { ...PageData.Hero } />
          <Video { ...Homepage.Video } />
          <DevsFed { ...PageData.DevsFed } />
        </div>
        <TextPosts { ...PageData.CurrentPosts } />
        <RelSkills { ...PageData.Related }/>
        <Footer { ...FooterData } />
      </div>
    )
  }
}
