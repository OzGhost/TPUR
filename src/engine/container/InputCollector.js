import React from 'react'
import { connect } from 'react-redux'
import InputCollector from '../component/InputCollector'

const stateToProps = state => {
  return state.userInput
}

export default connect(stateToProps)(InputCollector)
