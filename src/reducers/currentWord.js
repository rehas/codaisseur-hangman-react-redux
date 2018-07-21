import {NEW_GAME} from '../lib/game'

const initialState = {
  currentWord: ''
}
export default (state = initialState, action = {}) => {
  if (action.type === NEW_GAME){
    return {
      ...state,
      currentWord : action.payload
    }
  }
  return state
}