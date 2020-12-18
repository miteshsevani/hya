import React from 'react'
import '../stylesheets/banner.css'

const Banner = (props) => {
  return (
    <section className="banner">
      <h3>Important Announcement</h3>
      <div dangerouslySetInnerHTML={{
        __html: props.text
      }}>
      </div>
    </section>
  )
}

export default Banner;
