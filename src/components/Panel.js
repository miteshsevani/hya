import React from 'react'
import '../stylesheets/panel.css'

const Panel = (props) => {
  return (    
    <div className={`class ${props.data.className}`}>
      <img className="class-icon" src={props.data.icon} alt={props.data.subject} />
      <h3 className="class-name">{props.data.subject}</h3>    
      <div className="years">{props.data.years}</div>
      <div className="day-time">
        <span>{props.data.day}, </span>
        <span>{props.data.time}</span>
      </div>
      <div dangerouslySetInnerHTML={{__html: props.data.venue}}></div>
    </div>      
  )
}

export default Panel;