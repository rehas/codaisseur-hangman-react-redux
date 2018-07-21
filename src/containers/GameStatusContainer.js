import * as React from 'react'
import * as Game from '../lib/game'
import { connect } from 'react-redux';

class GameStatusContainer extends React.PureComponent{
  render(){
    const tp = this.props
    const gameOver = Game.gameFinished(tp.currentWord, tp.previousGuesses)
    const userWins = Game.isWinner(tp.currentWord, tp.previousGuesses)
    const userLoses = Game.wrongGuessLimit(tp.currentWord, tp.previousGuesses)
    const prevGuesses = tp.previousGuesses.map((x,i)=>{
      return (
        <span key = {i}> <b> {x}</b> </span>
      )
    })
    return (
      <div>
        <p>{gameOver ? "Game Finished" : "Game Goes On" }</p>
        <div>{ userWins ?  
                "You WIN" : 
                  userLoses ?
                    <div>
                      <p>You LOSE</p> 
                      <p>The Word Was  <b> {tp.currentWord}</b></p>
                    </div>
                  : ""
          }</div>
        <hr/>
        <p>Your Previous Guesses</p>  
        {prevGuesses}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
      currentWord: state.currentWord,
      previousGuesses: state.previousGuesses
  }
}

export default connect(mapStateToProps)(GameStatusContainer)