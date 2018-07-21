import { combineReducers } from 'redux'
import currentWord from './currentWord'
import userGuesses from './userGuesses'

// const reducer = (state = {key:[]}, action = {}) => {
//   switch (action.type) {
//   default:
//     return state
//   }
// }

export default combineReducers({
  currentWord,
  userGuesses
})