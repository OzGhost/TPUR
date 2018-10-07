import { RECEIVE_CALCULATION_RESULT, CLEAN_RESULT } from '../action'

const CalculationResult = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_CALCULATION_RESULT:
      return action.payload

    case CLEAN_RESULT:
      return {}

    default:
      return state
  }
}

export default CalculationResult
