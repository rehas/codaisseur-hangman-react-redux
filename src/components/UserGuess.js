import * as React from 'react'
import store from '../store'
import * as Game from '../lib/game'

export default class UserGuess extends React.PureComponent{
  handleChange(event){
    if (event.target.value.length > 1){
      event.target.value = event.target.value.slice(0,1)
      console.log("1 letter at a time :), That's why it's not happening :)")
      return 
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const newGuess = event.target.guessedCharacter.value.toLowerCase();
    if(newGuess === "" || newGuess === '' || newGuess === ' ' ){
      event.target.guessedCharacter.value = ''
      alert("There are no spaces in our word don't worry :)")
      return
    }

    if(newGuess.match(/[^a-z|^A-Z|]/)){
      event.target.guessedCharacter.value = ''
      alert("Only alphabetical characters in english please")
      return
    }

    const prevGuesses = store.getState().previousGuesses

    if (prevGuesses.indexOf(newGuess) > -1 ){
      event.target.guessedCharacter.value = ''
      alert(`
      If there are more than one occurences of the letter, 
      we display them all
      No need to make the same guess :)`)
      return 
    }
    store.dispatch(Game.makeGuess(newGuess))
    event.target.guessedCharacter.value = ''
  }
  
  render(){
    return (
      <div className="user-guess">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type="text" 
              onChange={this.handleChange}
              name = "guessedCharacter"
              placeholder="Enter A Character Here"
            />
            <br/>
            <input className="guess-button" type="submit" value="Guess"/>
          </label>
        </form>
      </div>
    )
  }
}
