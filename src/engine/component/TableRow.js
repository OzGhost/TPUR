import React from 'react'
import PropTypes from 'prop-types'

class TableRow extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    cells: PropTypes.array.isRequired,
    header: PropTypes.bool
  }

  render = () => {
    const { label, cells, header } = this.props
    const headClazz = header ? ' row__header' : ''
    const labelClazz = 'row__label' + headClazz
    const cellClazz = 'row__cell' + headClazz
    return (
      <tr>
        { label ? <td className={labelClazz} title={label}>{label}</td> : label }
        {
          cells.map((val, index) =>
            <td className={cellClazz} title={val} key={index}>
              {val}
            </td>
          )
        }
      </tr>
    )
  }
}

export default TableRow
