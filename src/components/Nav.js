import React from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import '../stylesheets/nav.css'

export default class Nav extends React.Component {  
  getNavState = () => {
    return this.props.navState ? 'visible' : '';
  }
  render() {
    return (
      <HashRouter>      
        <nav className={`main-nav ${this.getNavState()}`}>
          <ul>          
            <li><NavLink to="/about">About HYA</NavLink></li>
            <li><NavLink to="/keydates">Key Dates</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
          </ul>
          <div className="social">
            <a href="https://www.facebook.com/hyauk1" target="_blank" rel="noopener noreferrer" className="facebook"></a>
            <a href="mailto:info@hyauk.org" className="email"></a>
          </div>
        </nav>
      </HashRouter>
    )
  }
}