import { combineReducers } from 'redux'
import currentWord from './currentWord'
import previousGuesses from './previousGuesses'

// const reducer = (state = {key:[]}, action = {}) => {
//   switch (action.type) {
//   default:
//     return state
//   }
// }

export default combineReducers({
  currentWord,
  previousGuesses
})