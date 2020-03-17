import React from 'react'
import '../stylesheets/header.css'

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
          <Nav navState={this.state.toggle} />
          <span className={`nav-dropdown ${this.getIcon()}`} onClick={this.handleClick}></span>
        </div>  
      </header>
    )
  }
}