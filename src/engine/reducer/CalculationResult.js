import { RECEIVE_CALCULATION_RESULT } from '../action'

const CalculationResult = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_CALCULATION_RESULT:
      return action.payload

    default:
      return state
  }
}

export default CalculationResult
