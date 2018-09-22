import { USER_INPUT_SIGNAL } from '../common/Constant'
import { UPDATE_USER_INPUT } from '../action'

const defaultViewModal = {
  bank: undefined,
  product: undefined,
  payoutDate: undefined,
  etpFeasibility: false,
  violationMinimalRequirement: false,
  foreignSurcharge: false,
  country: undefined,
  segment: undefined,
  business: undefined,
  contributionMargin: undefined,
  businessCase: undefined,
  typeOfProperty: undefined,
  amount: undefined,
  marketValue: undefined,
  mortgageAmount: undefined,
  rating: undefined,
  ratingAgency: undefined
}

const UserInput = (state = defaultViewModal, action) => {
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
