import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'

class InputText extends InputBlock {

  static propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func,
    value: PropTypes.string
  }

  /** @Override */
  buildInputElement = changeListener => {
    return <input type="text" onChange={changeListener} value={this.props.value} />
  }

}

export default InputText
