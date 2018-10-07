import { COMBOBOX_INFO_ARRIVED,
        RECEIVE_CALCULATION_RESULT,
        CLEAN_RESULT  } from '../action'
import StaticStore from '../common/StaticStore'

const IsReady = (state = false, action) => {
  switch(action.type) {

    case COMBOBOX_INFO_ARRIVED:
      StaticStore.initStore(action.payload)
      return true

    case RECEIVE_CALCULATION_RESULT:
      return true

    case CLEAN_RESULT:
      return false

    default:
      return state
  }
}

export default IsReady
