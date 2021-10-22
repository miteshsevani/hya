import React from 'react'
import Card from './Card'
import '../stylesheets/home.css'

import Banner from './Banner'

const data = require('../content/data.json');

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <Banner text={data.banner.text} />
        <h1 className="title">Our Classes</h1>
        <div className="classes">
          {data.index.classes.map((val, key) => {
            return(
              <Card key={key} data={val} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
