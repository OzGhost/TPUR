import { combineReducers } from 'redux'
import UserInput from './UserInput'
import IsReady from './IsReady'
import CalculationResult from './CalculationResult'

const rootReducer = combineReducers({
  userInput: UserInput,
  isReady: IsReady,
  calculationResult: CalculationResult
})

export default rootReducer
