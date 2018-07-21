import * as React from 'react'
import * as Game from '../lib/game'
import { connect } from 'react-redux';
import store from '../store'


class GamePageContainer extends React.PureComponent{

  componentDidMount(){
    store.dispatch(Game.newGame())
  }


  render(){

    
    return (
      <div className="game-page-container">
        <p> You're playing Hang Man</p>
        <p>{this.props.currentWord.currentWord}</p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
      currentWord: state.currentWord
  }
}

export default connect(mapStateToProps)(GamePageContainer)