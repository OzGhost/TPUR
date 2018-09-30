import React from 'react'
import { connect } from 'react-redux'
import ResultTable from '../component/ResultTable'

export default connect(state => state.calculationResult)(ResultTable)
