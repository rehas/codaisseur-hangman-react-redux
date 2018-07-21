import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


export default class WelcomePage extends PureComponent{
  render(){
    return (
      <div className="welcome-page">
        <h2>Welcome to HangMan</h2>
        <div className="insturctions">
          <ul>
            <li>You will try to guess a word by guessing the letters in it</li>
            <li>First you will see the word outline with covered letters</li>
            <li>You have 6 wrong-guess channces</li>
            <li>Only alphabetical characters are accepted</li>
            <li>If you accidentally enter a character which you've guessed before we won't count it don't worry :)</li>
            <li>Click Start Game To Begin</li>
          </ul>
        </div>
        <Link to={'/hangman'}>Start Game</Link>
      </div>
    )
  }
}