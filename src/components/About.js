import React from 'react'


const data = require('../content/data.json');

const About = () => {
  return(
    <div className="content">
      <h1 className="title">{data.about.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.about.body}}></div>
      <h2 className="title">{data.about.objectives.title}</h2>
      <ol>
      {data.about.objectives.objectives.map((objective, key) => {
        return (
          <li key={key}>{objective.objective}</li>
        )
      })}
      </ol>
    </div>
  )
}

export default About;