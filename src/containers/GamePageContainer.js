import * as React from 'react'
import * as Game from '../lib/game'
import { connect } from 'react-redux';
import store from '../store'
import UserGuess from '../components/UserGuess'
import CurrentWord from '../components/CurrentWord'
import WrongGuessCount from '../components/WrongGuessCount'


class GamePageContainer extends React.PureComponent{

  componentDidMount(){
    store.dispatch(Game.newGame())

  }


  render(){
    return (
      <div className="game-page-container">
        <p> You're playing Hang Man</p>
        <p>{this.props.currentWord.currentWord}</p>
        <CurrentWord currentWordState = {Game.showGuess(this.props.currentWord, this.props.userGuesses)}/>
        <WrongGuessCount counter = {Game.wrongGuessCount(this.props.currentWord, this.props.userGuesses)}/>
        <UserGuess/>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
      currentWord: state.currentWord.currentWord,
      userGuesses: state.userGuesses.previousGuesses
  }
}

export default connect(mapStateToProps)(GamePageContainer)