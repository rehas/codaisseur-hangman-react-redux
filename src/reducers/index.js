import { combineReducers } from 'redux'
import currentWord from './currentWord'
import previousGuesses from './previousGuesses'

export default combineReducers({
  currentWord,
  previousGuesses
})