import { COMBOBOX_INFO_ARRIVED } from '../action'
import StaticStore from '../common/StaticStore'

const IsReady = (state = false, action) => {
  if (action.type === COMBOBOX_INFO_ARRIVED) {
    StaticStore.initStore(action.payload)
    return true
  }
  return state
}

export default IsReady
