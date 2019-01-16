import React from 'react'
import PropTypes from 'prop-types'

import InputText from './InputText'
import InputNumber from './InputNumber'
import InputDate from './InputDate'
import Dropdown from './Dropdown'
import InputBool from './InputBool'
import AdditionalSecurities from './AdditionalSecurities'
import StaticStore from '../common/StaticStore'

import { updateUserInput, autoFill, launch } from '../action'

import { COMBOBOX_FIELDS_LABEL, COMBOBOX_FIELDS_NAME
        , PAYOUT_DATE_FIELD_NAME
        , ETP_FIELD_NAME
        , VIOLATION_FIELD_NAME
        , FOREIGN_SURCHARGE_FIELD_NAME
        , CONTRIBUTION_MARGIN_FIELD_NAME
        , AMOUNT_FIELD_NAME
        , MARKET_VALUE_FIELD_NAME
        , MORTGAGE_AMOUNT_FIELD_NAME
        } from '../common/Constant'

const InputCollector = (props) => {
  const store = StaticStore.getStore()

  const buildListener = fieldName => value => {
    props.dispatch(updateUserInput(fieldName, value))
  }

  return (
    <div className="input-collector">
      {
        COMBOBOX_FIELDS_NAME.map((fieldName, index) => {
          return <Dropdown
                    key={fieldName}
                    label={COMBOBOX_FIELDS_LABEL[index]}
                    items={store[fieldName]}
                    value={props[fieldName]}
                    changeListener={buildListener(fieldName)}
          />
        })
      }

      <InputDate
          label={'Payout Date'}
          value={props[PAYOUT_DATE_FIELD_NAME]}
          changeListener={buildListener('payoutDate')}/>
      <br/>

      <InputBool
          label={'ETP feasibility'}
          value={props[ETP_FIELD_NAME]}
          changeListener={buildListener('etpFeasibility')}/>
      <InputBool
          label={'Violation minimal requirements'}
          value={props[VIOLATION_FIELD_NAME]}
          changeListener={buildListener('violationMinimalRequirement')}/>
      <InputBool
          label={'Foreign surcharge'}
          value={props[FOREIGN_SURCHARGE_FIELD_NAME]}
          changeListener={buildListener('foreignSurcharge')}/>

      <br/>

      <InputNumber
          label={'Contribution margin'}
          value={props[CONTRIBUTION_MARGIN_FIELD_NAME]}
          changeListener={buildListener('contributionMargin')}/>
      <InputNumber
          label={'Amount in CHF'}
          value={props[AMOUNT_FIELD_NAME]}
          changeListener={buildListener('amount')}/>
      <InputNumber
          label={'Market value in CHF'}
          value={props[MARKET_VALUE_FIELD_NAME]}
          changeListener={buildListener('marketValue')}/>
      <InputNumber
          label={'Mortgage amount in CHF'}
          value={props[MORTGAGE_AMOUNT_FIELD_NAME]}
          changeListener={buildListener('mortgageAmount')}/>

      <br/>

      <AdditionalSecurities additionalSecurities={props.additionalSecurities}/>

      <div className="action-block">
        <button onClick={()=>props.dispatch(autoFill())}>
          Fill-in sample data
        </button>
        <button onClick={()=>props.dispatch(launch())}>Calculate</button>
      </div>
    </div>
  )
}

InputCollector.propTypes = {
  bank: PropTypes.string
  ,product: PropTypes.string
  ,payoutDate: PropTypes.object
  ,etpFeasibility: PropTypes.bool
  ,violationMinimalRequirement: PropTypes.bool
  ,foreignSurcharge: PropTypes.bool
  ,country: PropTypes.string
  ,segment: PropTypes.string
  ,business: PropTypes.string
  ,contributionMargin:PropTypes.number
  ,businessCase: PropTypes.string
  ,typeOfProperty: PropTypes.string
  ,amount: PropTypes.number
  ,marketValue: PropTypes.number
  ,mortgageAmount: PropTypes.number
  ,rating: PropTypes.string
  ,ratingAgency: PropTypes.string
  ,additionalSecurities: PropTypes.array
}

export default InputCollector
