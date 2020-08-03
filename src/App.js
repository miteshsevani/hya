import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import './stylesheets/App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Keydates from './components/Keydates'
import History from './components/History'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/keydates" component={Keydates} />
        <Route path="/history" component={History}/>
        <Route path="/register" component={Register}/>
        </div>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
