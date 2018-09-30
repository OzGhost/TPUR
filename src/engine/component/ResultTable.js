import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'

class ResultTable extends React.Component {

  static propTypes = {
    calculationResults: PropTypes.arrayOf(PropTypes.shape({
      period: PropTypes.number,
      ruleResults: PropTypes.object.isRequired
    }))
  }

  convertResultToRows = results => {
    if ( ! Array.isArray(results) || results.length < 1)
      return []

    var keys = Object.keys(results[0]['ruleResults'])
    keys.sort()
    return keys.map(key => {
      var row = {}
      row.key = key
      row.label = key
      row.cells = results.map(item => item['ruleResults'][key])
      return row
    })
  }

  extractColumnHeader = results => {
    if ( ! Array.isArray(results) || results.length < 1)
      return undefined

    var header = {}
    header.key = 'resultTableHeader'
    header.label = 'Category \\ Period'
    header.cells = results.map((item, index) => item.period || '__'+index)
    return header
  }

  render = () => {
    const rows = this.convertResultToRows(this.props.calculationResults)
    const thead = this.extractColumnHeader(this.props.calculationResults)
    return (
      <table className="result-table">
        <tbody>
          { thead && <TableRow {...thead} header={true}/> }
          {
            rows.map(row => <TableRow key={row.key} {...row}/>)
          }
        </tbody>
      </table>
    )
  }

}

export default ResultTable
