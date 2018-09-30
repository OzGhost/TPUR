import React from 'react'
import PropTypes from 'prop-types'

class InputBlock extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    changeListener: PropTypes.func
  }

  render = () => {
    const { label, changeListener } = this.props
    const callback = (event) => {
      if ('function' === typeof(changeListener))
        changeListener(this.valueExtract(event))
    }
    return this.toDOM(label, callback)
  }

  valueExtract = event => {
    return event.target.value
  }

  toDOM = (label, callback) => {
    return (
      <div className="input-block">
        <label>{label}</label>
        {
          this.buildInputElement(callback)
        }
      </div>
    )
  }

  /** @Abstract */
  buildInputElement = changeListener => {
    return <i></i>
  }

}

export default InputBlock

