import { USER_INPUT_SIGNAL } from '../common/Constant'
import GlobalConfig from '../common/GlobalConfig'

const host = GlobalConfig.get('host')

export const UPDATE_USER_INPUT = 'User input updated'
export const AUTO_FILL_INPUT = 'Auto fill user input'
export const COMBOBOX_INFO_ARRIVED = 'Combo box info is arrived'
export const RECEIVE_CALCULATION_RESULT = 'Receive calcuation result'
export const CLEAN_RESULT = 'Result table cleaning'
export const POST_AS = "New additional security";
export const DROP_AS = "Delete additional security";

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
  const comboboxInfoURI = host + GlobalConfig.get('comboboxInfoURI');
  fetch(comboboxInfoURI)
    .then(res => res.json())
    .then(json => {
      var ratingWithoutZero = json['rating'].filter(e => e.name !== '0')
      var newOne = Object.assign({}, json, {rating: ratingWithoutZero})
      dispatch(comboboxInfoArrive(newOne))
    })
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
  dispatch(cleanResult())
  const payload = GlobalConfig.get('convertPayload')(getState().userInput)
  const calculatorURI = host + GlobalConfig.get('calculatorURI')

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

const cleanResult = () => ({
  type: CLEAN_RESULT
})

export const postAS = payload => ({
  type: POST_AS,
  signal: USER_INPUT_SIGNAL,
  as: payload
});

export const dropAS = id => ({
  type: DROP_AS,
  signal: USER_INPUT_SIGNAL,
  id: id
});
