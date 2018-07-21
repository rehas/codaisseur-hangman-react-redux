import { MAKE_GUESS } from "../lib/game";
import * as Game from '../lib/game'

const initialState = {
  remainingGuessCount : 6,
  previousGuesses : [],
}

export default (state = initialState, action = {}) => {
  if (action.type === MAKE_GUESS){
    return {
      ...state,
      previousGuesses : state.previousGuesses.concat(action.payload)
    }

  }
  return state
}