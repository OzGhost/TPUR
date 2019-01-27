import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'
import StaticStore from '../common/StaticStore'

class ResultTable extends React.Component {

  static propTypes = {
    calculationResults: PropTypes.arrayOf(PropTypes.shape({
      period: PropTypes.number,
      ruleResults: PropTypes.object.isRequired
    }))
  }

  convertResultToRows = results => {
    if ( ! Array.isArray(results) || results.length < 1)
      return [];
    var orderedResultKeys = StaticStore.getStore().orderedResultKeys || [];
    return orderedResultKeys.map(ork => ({
      key: ork.code,
      label: ork.name,
      cells: results.map(item => item['ruleResults'][ork.code])
    }));
  }

  extractColumnHeader = results => {
    if ( ! Array.isArray(results) || results.length < 1)
      return undefined

    var header = {}
    header.key = 'resultTableHeader'
    header.label = 'Category \\ Period'
    header.cells = results.map(item => item.period)
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
