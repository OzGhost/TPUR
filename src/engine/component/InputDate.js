import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'
import DatePicker from 'react-datepicker'

class InputDate extends InputBlock {

  static propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func,
    value: PropTypes.object
  }

  /** @Override */
  valueExtract = date => {
    return date
  }

  /** @Override */
  buildInputElement = changeListener => {
    return (
      <DatePicker
          selected={this.props.value}
          onChange={changeListener}
          dateFormat='DD.MM.YYYY'/>
    )
  }

}

export default InputDate

