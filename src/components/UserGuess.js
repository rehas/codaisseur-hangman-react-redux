import * as React from 'react'
import store from '../store'
import * as Game from '../lib/game'

export default class UserGuess extends React.PureComponent{
  handleChange(event){
    console.log(event.target.value)
    if (event.target.value.length > 1){
      // console.log("max input is 1 character")
      // alert("max input is 1 character")
      event.target.value = event.target.value.slice(0,1)
      return false
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const newGuess = event.target.guessedCharacter.value;
    store.dispatch(Game.makeGuess(newGuess))
    event.target.guessedCharacter.value = ''
  }
  
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
                        Guess 
            <input 
              type="text" 
              onChange={this.handleChange}
              name = "guessedCharacter"
                         />
          </label>
          <input type="submit" value="Guess"/>
        </form>
      </div>
    )
  }
}

// onChange={this.handleChange}
// value = {this.state.name}
             