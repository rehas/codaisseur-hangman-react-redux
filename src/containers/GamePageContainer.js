import * as React from 'react'
import * as Game from '../lib/game'
import { connect } from 'react-redux';
import store from '../store'
import GameStatusContainer from './GameStatusContainer'
import UserGuess from '../components/UserGuess'
import CurrentWord from '../components/CurrentWord'
import WrongGuessCount from '../components/WrongGuessCount'

class GamePageContainer extends React.PureComponent{

  componentDidMount(){
    store.dispatch(Game.newGame())
  }

  newGameButtonClicked(){
    store.dispatch(Game.newGame())
  }

  render(){
    const gameOver = Game.gameFinished(
      this.props.currentWord,
      this.props.previousGuesses
    )
    return (
      <div className="game-page-container">
        <CurrentWord 
          currentWordState = 
            {Game.showGuess(
              this.props.currentWord,
              this.props.previousGuesses)}
        />
        <WrongGuessCount
          counter = 
            {Game.wrongGuessCount(
              this.props.currentWord,
              this.props.previousGuesses)}
        />
        {gameOver? <p>Play one more time?</p> : <UserGuess/> }
        <button onClick={this.newGameButtonClicked}>NEW GAME</button>
        <div className="status-controller">
          <GameStatusContainer/>
        </div>
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

export default connect(mapStateToProps)(GamePageContainer)