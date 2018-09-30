import React from 'react'
import { connect } from 'react-redux'

import InputCollector from '../container/InputCollector'
import ResultTable from '../container/ResultTable'
import StaticStore from '../common/StaticStore'
import { loadComboboxInput } from '../action'

class App extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(loadComboboxInput())
  }

  render = () => {
    if ( ! this.props.isReady)
      return <div className="ic-loading"></div>

    const products = StaticStore.getStore()['product']

    const change = (val) => {
      console.log('cout << got element: ', val)
    }

    return (
      <div className="TPUR-app">
        <InputCollector />
        <ResultTable />
      </div>
    )
  }
}

export default connect(state => ({isReady: state.isReady}))(App)
