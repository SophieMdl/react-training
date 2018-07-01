import React, { Component } from 'react';
import Music from './containers/Music.js'
import Prime from './containers/Prime.js'
import Graph from './containers/Graph.js'
import { Router, Link } from "@reach/router";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="music">Music</Link>
          <Link to="prime">Prime</Link>
          <Link to="graph">Graph</Link>
        </nav>
        <Router>
          <Music path="/music"/>
          <Prime path="/prime"/>
          <Graph path="/graph"/>
        </Router>
      </div>
    );
  }
}

export default App;
