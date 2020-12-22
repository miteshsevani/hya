import React from 'react'
import '../stylesheets/resources.css'

const data = require('../content/data.json');

const Resources = () => {
  return (
    <div className="content">
      <h1 className="title">{data.resources.title}</h1>
      <div className="wrapper">
        {data.resources.resource.map((items,key) => {
          return (
            <div key={key}>
              <h3 className="sub-title">{items.category}</h3>
              <ol>
              {items.files.map((file, key) => {
                return (
                  <li key={key} className="resources">
                    <a href={ file.source } target="_blank" rel="noopener noreferrer">{ file.title }</a>
                  </li>
                )
              })}
              </ol>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Resources;
