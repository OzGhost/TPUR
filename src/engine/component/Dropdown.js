import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'

class Dropdown extends InputBlock {

  static propTypes = {
    value: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.any
    })).isRequired
  }

  /** @Override */
  valueExtract = event => {
    let val = event.target.value
    if (val === '...')
      return undefined
    return val
  }
  
  /** @Override */
  buildInputElement = changeListener => {
    const { value, items } = this.props

    return (
      <select value={value} onChange={changeListener}>
        <option>...</option>
        {
          items.map(i => <option key={i.code} value={i.code}>{i.name}</option>)
        }
      </select>
    )
  }
}

export default Dropdown
