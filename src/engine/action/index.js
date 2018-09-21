import { USER_INPUT_SIGNAL } from '../common/Constant'

export const UPDATE_USER_INPUT = 'User input updated'
export const COMBOBOX_INFO_ARRIVED = 'Combo box info is arrived'

const updateUserInput = (key, value) => update(USER_INPUT_SIGNAL, key, value)

const update = (signal, key, value) => (
  {
    type: UPDATE_USER_INPUT,
    signal,
    key,
    value
  }
)

export const loadComboboxInput = () => dispatch => {
  fetch('http://localhost:3000/combobox-info')
    .then(res => res.json())
    .then(json => dispatch(comboboxInfoArrive(json)))
}

const comboboxInfoArrive = data => (
  {
    type: COMBOBOX_INFO_ARRIVED,
    payload: data
  }
)

