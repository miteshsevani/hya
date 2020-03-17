import React from 'react'
import { HashRouter, NavLink } from "react-router-dom";
import '../stylesheets/header.css'
import '../stylesheets/nav.css'

import Nav from './Nav'

export default class Header extends React.Component {
  state = {
    toggle: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  getIcon = () => {
    return this.state.toggle ? 'close' : '';
  }
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <a href="/">
            <div className="brand">
              <div className="header-logo">
                <img src="../images/logo.png" alt="logo"/>
              </div>
              <div className="brand-wrapper">
                <span className="brand-title">Hindu Youth Association</span>
              </div>
            </div>
          </a>
          <HashRouter>
            <nav className={`main-nav ${this.state.toggle ? 'visible' : ''}`}>
              <ul>
                <li><NavLink onClick={this.handleClick} to="/about">About HYA</NavLink></li>
                <li><NavLink onClick={this.handleClick} to="/keydates">Key Dates</NavLink></li>
                <li><NavLink onClick={this.handleClick} to="/history">History</NavLink></li>
                <li><a onClick={this.handleClick} href="http://hyauk.org/moodle" target="_blank">Moodle</a></li>
              </ul>
              <div className="social">
                <a href="https://www.facebook.com/hyauk1" target="_blank" rel="noopener noreferrer" className="facebook"></a>
                <a href="mailto:info@hyauk.org" className="email"></a>
              </div>
            </nav>
          </HashRouter>
          <span className={`nav-dropdown ${this.getIcon()}`} onClick={this.handleClick}></span>
        </div>
      </header>
    )
  }
}