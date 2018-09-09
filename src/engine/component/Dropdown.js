import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({
                    value,
                    items,
                    changeListener
                  }) => {

  const callback = (e) => {
    if ('function' !== typeof(changeListener))
      return
    let value = e.target.value
    if (value === '...') {
      value = undefined
    }
    changeListener(value)
  }

  return (
    <select value={value} onChange={callback}>
      <option>...</option>
      {
        items.map(i => <option key={i.label} value={i.value}>{i.label}</option>)
      }
    </select>
  )
}

Dropdown.propTypes = {
  value: PropTypes.any,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  })).isRequired,
  changeListener: PropTypes.func
}

export default Dropdown
