/* REACT */
import React, { Component } from 'react'
import { Router, Link } from "@reach/router"
import { Menu } from 'semantic-ui-react'
/* COMPONENTS */
import Music from './containers/Music.js'
import Prime from './containers/Prime.js'
import Graph from './containers/Graph.js'
/* CSS */
import 'semantic-ui-css/semantic.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu>

          <Link to="music">
            <Menu.Item name='music' />
          </Link>
          <Link to="prime">
            <Menu.Item name='prime' />
          </Link>
          <Link to="graph">
            <Menu.Item name='graph' />
          </Link>
        </Menu>
        <Router>
          <Music path="/music"/>
          <Prime path="/prime"/>
          <Graph path="/graph"/>
        </Router>
      </div>
    )
  }
}

export default App
