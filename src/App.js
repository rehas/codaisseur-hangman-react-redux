import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import GamePageContainer from './containers/GamePageContainer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Reactive Hang-Man</h1>
        </header>
        <p className="App-intro">
      To get started, click <code>Start Game Link</code> and have fun guessing.
        </p>
        <hr/>
        <main>
          <Route exact path = '/' component = {WelcomePage} />
          <Route exact path = '/hangman' component = {GamePageContainer} />
        </main>
      </div>
    )
  }
}

export default App
