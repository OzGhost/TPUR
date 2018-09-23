import { USER_INPUT_SIGNAL } from '../common/Constant'
import GlobalConfig from '../common/GlobalConfig'

const host = GlobalConfig.get('host')
const comboboxInfoURI = host + GlobalConfig.get('comboboxInfoURI')
const calculatorURI = host + GlobalConfig.get('calculatorURI')

export const UPDATE_USER_INPUT = 'User input updated'
export const AUTO_FILL_INPUT = 'Auto fill user input'
export const COMBOBOX_INFO_ARRIVED = 'Combo box info is arrived'
export const RECEIVE_CALCULATION_RESULT = 'Receive calcuation result'

export const updateUserInput = (key, value) =>
  update(USER_INPUT_SIGNAL, key, value)

const update = (signal, key, value) => (
  {
    type: UPDATE_USER_INPUT,
    signal,
    key,
    value
  }
)

export const loadComboboxInput = () => dispatch => {
  fetch(comboboxInfoURI)
    .then(res => res.json())
    .then(json => dispatch(comboboxInfoArrive(json)))
}

const comboboxInfoArrive = data => (
  {
    type: COMBOBOX_INFO_ARRIVED,
    payload: data
  }
)

export const autoFill = () => ({
  type: UPDATE_USER_INPUT,
  signal: AUTO_FILL_INPUT
})

export const launch = () => (dispatch, getState) => {
  const payload = GlobalConfig.get('convertPayload')(getState().userInput)

  fetch(
    calculatorURI,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }
  )
    .then(rs => rs.json())
    .then(result => {
      const convertedResult = GlobalConfig.get('convertResult')(result)
      dispatch( receiveCalculationResult(convertedResult) )
    })
}

const receiveCalculationResult = result => ({
  type: RECEIVE_CALCULATION_RESULT,
  payload: result
})
