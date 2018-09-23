import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'

class InputNumber extends InputText {

  static propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func,
    value: PropTypes.number
  }

  /** @Override */
  valueExtract = event => {
    let val = Number(event.target.value)
    return isNaN(val) ? 0 : val
  }
}

export default InputNumber
