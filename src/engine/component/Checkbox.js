import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'

class Checkbox extends InputBlock {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.bool,
  }

  /** @Override */
  extractValue = event => {
    return event.target.checked
  }
  
  /** @Override */
  buildInputElement = changeListener => {
    return <input
              type="checkbox"
              onChange={changeListener}
              checked={this.props.value} />
  }
}

export default Checkbox
