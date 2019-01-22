import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'

const orderedKeys = [
  "EQUITY_CAPITAL",
  "RISK",
  "REFINANCING",
  "IRS",
  "HEDGE_COSTS",
  "ETP_FEASIBILITY",
  "FORWARD",
  "DUTY_COSTS",
  "PROPERTY_CONTRIBUTION",
  "PROFIT_CONTRIBUTION",
  "CUSTOMER_CONTRIBUTION",
  "MARKET_BALANCING",
  "FOREIGN_SURCHARGE",
  "PRODUCTION",
  "DISTRIBUTION_COSTS",
  "MINIMAL_OFFER",
  "SURCHARGE",
  "RECOMMENDED_INTEREST_RATE",
  "MORTGAGE_SPLITTING_1",
  "MORTGAGE_SPLITTING_2",
  "MORTGAGE_SPLITTING_3",
  "MORTGAGE_SPLITTING_4",
  "VOLUME_DISCOUNT",
  "FLOOR",
  "COMPETENCE_LEVEL_1",
  "COMPETENCE_LEVEL_2",
  "COMPETENCE_LEVEL_3",
  "COMPETENCE_LEVEL_4",
  "COMPETENCE_LEVEL_5",
  "COMPETENCE_LEVEL_6",
  "COMPETENCE_LEVEL_7",
  "COMPETENCE_LEVEL_8",
  "RAW_RECOMMENDED_INTEREST_RATE"
]

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

    return orderedKeys.map(key => {
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
