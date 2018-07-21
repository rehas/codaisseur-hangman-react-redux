import { MAKE_GUESS, NEW_GAME } from "../lib/game";

const initialState = []

export default (state = initialState, action = {}) => {
  if (action.type === MAKE_GUESS){
    return state.concat(action.payload)
  }
  if (action.type === NEW_GAME){
    return []
  }

  return state
}