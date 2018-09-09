import React from 'react'
import PropTypes from 'prop-types'

class InputBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func
  }

  render = () => {
    const { label, changeListener } = this.props
    const callback = (event) => {
      if ('function' === typeof(changeListener))
        changeListener(valueExtract(event))
    }
    return (
      <div className="input-block">
        <label>{label}</label>
        {
          buildInputElement(callback)
        }
      </div>
    )
  }

  valueExtract = event => {
    return event.target.value
  }

  /** @Abstract */
  buildInputElement = changeListener => {
    return <i></i>
  }

}

