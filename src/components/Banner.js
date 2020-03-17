import React from 'react'
import '../stylesheets/banner.css'

const Banner = (props) => {
  return (
    <section className="banner">  
      <div className="banner-heading">    
        <div className="quote">
          <h4>{props.intro}</h4>
          <div className="credit">Swami Vivekanand</div>
        </div>
      </div>
    </section>  
  )
}

export default Banner;