import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Donate from './components/Donate'
import Keydates from './components/Keydates'
import History from './components/History'
import Resources from './components/Resources'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/keydates" component={Keydates} />
          <Route path="/history" component={History}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/register" component={Register}/>
          <Route path="/donate" component={Donate}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
