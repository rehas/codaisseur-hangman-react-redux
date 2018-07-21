import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


export default class WelcomePage extends PureComponent{
  render(){
    return (
      <div className="welcome-page">
        <h1>This is the HangMan Welcome Page</h1>
        <Link to={'/hangman'}>Start Game</Link>
      </div>
    )
  }
}