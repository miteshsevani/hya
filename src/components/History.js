import React from 'react'
//import '../stylesheets/history.css'

const data = require('../content/data.json');

const History = () => {
  return(
    <div className="content">
      <h1 className="title">{data.history.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.history.body}}></div>
    </div>
  )
}

export default History;