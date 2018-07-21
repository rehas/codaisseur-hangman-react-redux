import {NEW_GAME} from '../lib/game'

const initialState = ''
export default (state = initialState, action = {}) => {
  if (action.type === NEW_GAME){
    return action.payload
  }
  return state
}