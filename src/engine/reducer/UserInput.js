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
import { UPDATE_USER_INPUT, AUTO_FILL_INPUT, POST_AS, DROP_AS } from '../action'

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
  ratingAgency: '',
  additionalSecurities: []
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

  var asCode = getFirstCode("additionalSecurityTypes");

  result[PAYOUT_DATE_FIELD_NAME] = moment().add(1, 'y');
  result[ETP_FIELD_NAME] = true
  result[VIOLATION_FIELD_NAME] = true
  result[FOREIGN_SURCHARGE_FIELD_NAME] = true
  result[CONTRIBUTION_MARGIN_FIELD_NAME] = 50000
  result[AMOUNT_FIELD_NAME] = 40000
  result[MARKET_VALUE_FIELD_NAME] = 60000
  result[MORTGAGE_AMOUNT_FIELD_NAME] = 80000
  result["additionalSecurities"] = [{
    id: 1,
    type: asCode,
    value: 40000000
  }]

  return result
}

const UserInput = (state = defaultViewModal, action) => {
  var oldState = state;
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

    case POST_AS:
      return {
        ...oldState,
        additionalSecurities: [...oldState.additionalSecurities, action.as]
      };

    case DROP_AS:
      return {
        ...oldState,
        additionalSecurities: oldState.additionalSecurities
                                      .filter(e => e.id !== action.id)
      };

    default:
      return state
  }
}

export default UserInput
