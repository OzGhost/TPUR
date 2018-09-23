import moment from 'moment'
import StaticStore from '../common/StaticStore'
import { USER_INPUT_SIGNAL, COMBOBOX_FIELDS_NAME
        , PAYOUT_DATE_FIELD_NAME
        , ETP_FIELD_NAME
        , VIOLATION_FIELD_NAME
        , FOREIGN_SURCHARGE_FIELD_NAME
        , CONTRIBUTION_MARGIN_FIELD_NAME
        , AMOUNT_FIELD_NAME
        , MARKET_VALUE_FIELD_NAME
        , MORTGAGE_AMOUNT_FIELD_NAME
        } from '../common/Constant'
import { UPDATE_USER_INPUT, AUTO_FILL_INPUT } from '../action'

const defaultViewModal = {
  bank: '',
  product: '',
  payoutDate: moment(),
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

const buildAutoInputState = () => {
  const store = StaticStore.getStore()

  const getFirstCode = fieldName => {
    if ( ! Array.isArray(store[fieldName]) || store[fieldName].length < 1)
      return ''
    return store[fieldName][0]['code'] || ''
  }

  let result = {}

  COMBOBOX_FIELDS_NAME.forEach(fieldName => {
    result[fieldName] = getFirstCode(fieldName)
  })

  result[PAYOUT_DATE_FIELD_NAME] = moment().add(10, 'days')
  result[ETP_FIELD_NAME] = true
  result[VIOLATION_FIELD_NAME] = true
  result[FOREIGN_SURCHARGE_FIELD_NAME] = true
  result[CONTRIBUTION_MARGIN_FIELD_NAME] = 50000
  result[AMOUNT_FIELD_NAME] = 40000
  result[MARKET_VALUE_FIELD_NAME] = 60000
  result[MORTGAGE_AMOUNT_FIELD_NAME] = 80000

  return result
}

const UserInput = (state = defaultViewModal, action) => {
  if (action.signal === AUTO_FILL_INPUT)
    return buildAutoInputState()

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
