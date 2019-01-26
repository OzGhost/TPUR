import React from 'react'
import { connect } from 'react-redux'

import Blocker from '../component/Blocker'
import InputCollector from '../container/InputCollector'
import ResultTable from '../container/ResultTable'
import StaticStore from '../common/StaticStore'

class App extends React.Component {

  render = () => {
    if (!this.props.isReady)
      return (
        <div className="TPUR-app">
          <Blocker lock={true} />
        </div>
      )
    return (
      <div className="TPUR-app">
        <Blocker lock={false} />
        <InputCollector />
        <ResultTable />
      </div>
    )
  }
}

export default connect(state => ({isReady: state.isReady}))(App)
