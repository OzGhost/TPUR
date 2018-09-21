import { USER_INPUT_SIGNAL } from '../common/Constant'
import { UPDATE_USER_INPUT } from '../action'

/*
viewModal = {
  bank: string,
  product: string,
  payoutDate: date,
  etpFeasibility: boolean,
  violationMinimalRequirement: boolean,
  foreignSurcharge: boolean,
  country: string,
  segment: string,
  business: string,
  contributionMargin: number,
  businessCase: string,
  typeOfProperty: string,
  amount: number,
  marketValue: number,
  mortgageAmount: number,
  rating: number,
  ratingAgency: string
}
*/

const UserInput = (state = {}, action) => {
  if (action.signal !== USER_INPUT_SIGNAL)
    return state

  switch(action.type) {
    case UPDATE_USER_INPUT:
      return {
        ...state,
        [action.key]: action.value
      }

    default:
      return state
  }
}

export default UserInput
