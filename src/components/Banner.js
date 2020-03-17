import React from 'react'
import '../stylesheets/banner.css'

const Banner = (props) => {
  return (
    <section className="banner">
      <h3>Important Announcement</h3>
      <h4 dangerouslySetInnerHTML={{
        __html: props.text
      }}>
      </h4>
    </section>
  )
}

export default Banner;