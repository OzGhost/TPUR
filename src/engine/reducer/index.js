import { combineReducers } from 'redux'
import UserInput from './UserInput'
import IsReady from './IsReady'

const rootReducer = combineReducers({
  userInput: UserInput,
  isReady: IsReady
})

export default rootReducer
