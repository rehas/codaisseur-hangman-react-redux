import { MAKE_GUESS, NEW_GAME } from "../lib/game";

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
  if (action.type === NEW_GAME){
    return {
      ...state,
      remainingGuessCount : 6,
      previousGuesses : []
    }
  }

  return state
}