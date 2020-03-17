import React from 'react'
import '../stylesheets/keydates.css'

const data = require('../content/data.json');

const Keydates = () => {
  return(
    <div className="content">
      <h1 className="title">{data.keydates.title}</h1>      
      {data.keydates.calendar.map((items,key) => {
        return (
          <div className="wrapper">
            <h3 key={key} className="title">{items.month}</h3>              
            {items.events.map((event, key) => {
              return(
                <div key={key} className="events">
                  <div className="date" dangerouslySetInnerHTML={{__html: event.date }}></div>
                  <div className="event" dangerouslySetInnerHTML={{__html: event.event }}></div>
                </div> 
              )           
            })}
          </div>
        )        
      })}      
    </div>
  )
}

export default Keydates;