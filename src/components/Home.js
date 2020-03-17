import React from 'react'
import Panel from './Panel'
import '../stylesheets/home.css'

import Banner from './Banner'

const data = require('../content/data.json');

const Home = () => {
  return (
    <div className="home">
      <Banner intro={data.index.intro} />
      <div className="content">
        <h1 className="title">Our Classes</h1>
        <div className="classes">
          {data.index.classes.map((val, key) => {
            return(
              <Panel key={key} data={val} />
            )
          })}        
        </div>
      </div>
    </div>
  )
}

export default Home