import { USER_INPUT_SIGNAL } from '../common/Constant'
import { UPDATE_USER_INPUT } from '../action'

const defaultViewModal = {
  bank: '',
  product: '',
  payoutDate: '',
  etpFeasibility: false,
  violationMinimalRequirement: false,
  foreignSurcharge: false,
  country: '',
  segment: '',
  business: '',
  contributionMargin: 0,
  businessCase: '',
  typeOfProperty: '',
  amount: 0,
  marketValue: 0,
  mortgageAmount: 0,
  rating: '',
  ratingAgency: ''
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
