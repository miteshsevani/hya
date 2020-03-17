import React from 'react'
import '../stylesheets/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img className="logo-40" src="./images/logo-40.png" alt="HYA 40 Logo"/>
        <img src="../images/logo.png" alt="HYA Logo"/>
      </div>
      <div className="tagline">Planting Seeds For A Brighter Future</div>
      <div className="copyright">Copyright &copy; { new Date().getFullYear() } Hindu Youth Association. All rights reserved. Registered charity no. 1142405</div>
    </footer>
  )
}

export default Footer;