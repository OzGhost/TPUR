import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'
import StringUtil from '../common/StringUtil'

class InputBool extends InputBlock {
  static propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func,
    value: PropTypes.bool
  }

  /** @Override */
  valueExtract = event => {
    return event.target.checked
  }
  
  /** @Override */
  toDOM = (label, callback) => {
    const id = StringUtil.eliminateSpace(label)
    return (
      <div className="input-block">
        <input
          id={id}
          type="checkbox"
          onChange={callback}
          checked={this.props.value}/>
        <label className="input__bool" htmlFor={id}> {label} </label>
      </div>
    )
  }

}

export default InputBool
