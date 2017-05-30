'use strict'
import React from 'react'
/**
 * Components
 */
 import Head from '../components/Head'
 import Layout from '../components/Layout'
 import Herobrands from '../components/Herobrands'
 import Video from '../components/Video'
 import Cavalry from '../components/Cavalry'
 import VideoFilter from '../components/VideoFilter'
 import DevsFed from '../components/DevsFed' //new (diffrent between cavalery)
 import Text from '../components/Text' //new
 import TextQuotes from '../components/TextQuotes' //new


/**
 * Content
 */


export default class extends React.Component {

  render () {
    return (
      <div>
        <Head />
        <div className="landing-tech">
          //<Text />
          <Layout>
            //<Herobrands />
            //<Video {...Homepage.Video}/>
            //<Cavalry {...Homepage.Cavalry}/>
            //<VideoFilter {...Homepage.VideoFilter}/>
          </Layout>
        </div>
      </div>
    )
  }
}
