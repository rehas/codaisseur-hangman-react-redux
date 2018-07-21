import * as React from 'react'
import * as Game from '../lib/game'
import { connect } from 'react-redux';

class GameStatusContainer extends React.PureComponent{
  render(){
    const gameOver = Game.gameFinished(this.props.currentWord, this.props.previousGuesses)
    const userWins = Game.isWinner(this.props.currentWord, this.props.previousGuesses)
    const userLoses = Game.wrongGuessLimit(this.props.currentWord, this.props.previousGuesses)

    return (
      <div>
        <p>{gameOver ? "Game Finished" : "Game Goes On" }</p>
        <div>{ userWins ?  
                "You WIN" : 
                  userLoses ?
                    <div>
                      <p>You LOSE</p> 
                      <p>The Word Was  <b> {this.props.currentWord}</b></p>
                    </div>
                  : ""
          }</div>
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