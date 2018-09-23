import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'
import InputNumber from './InputNumber'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'
import StaticStore from '../common/StaticStore'

import { updateUserInput  } from '../action'

const InputCollector = ({
                          bank
                          ,product
                          ,payoutDate
                          ,etpFeasibility
                          ,violationMinimalRequirement
                          ,foreignSurcharge
                          ,country
                          ,segment
                          ,business
                          ,contributionMargin
                          ,businessCase
                          ,typeOfProperty
                          ,amount
                          ,marketValue
                          ,mortgageAmount
                          ,rating
                          ,ratingAgency
                          ,dispatch
                        }) => {
  const store = StaticStore.getStore()

  const buildListener = fieldName => value => {
    dispatch(updateUserInput(fieldName, value))
  }

  return (
    <div className="input-collector">
      <Dropdown
          label={'Bank'}
          items={store['bank']}
          value={bank}
          changeListener={buildListener('bank')} />  
      <Dropdown
          label={'Product'}
          items={store['product']}
          value={product}
          changeListener={buildListener('product')}/>
      <InputText
          label={'Pay out date'}
          value={payoutDate}
          changeListener={buildListener('payoutDate')}/>
      <Checkbox
          label={'ETP feasibility'}
          value={etpFeasibility}
          changeListener={buildListener('etpFeasibility')}/>
      <Checkbox
          label={'Violation minimal requirements'}
          value={violationMinimalRequirement}
          changeListener={buildListener('violationMinimalRequirement')}/>
      <Checkbox
          label={'Foreign surcharge'}
          value={foreignSurcharge}
          changeListener={buildListener('foreignSurcharge')}/>
      <Dropdown
          label={'Country'}
          items={store['country']}
          value={country}
          changeListener={buildListener('country')}/>
      <Dropdown
          label={'Segment'}
          items={store['segment']}
          value={segment}
          changeListener={buildListener('segment')}/>
      <Dropdown
          label={'Business'}
          items={store['business']}
          value={business}
          changeListener={buildListener('business')}/>
      <InputNumber
          label={'Contribution margin'}
          value={contributionMargin}
          changeListener={buildListener('contributionMargin')}/>
      <Dropdown
          label={'Business Case'}
          items={store['businessCase']}
          value={businessCase}
          changeListener={buildListener('businessCase')}/>
      <Dropdown
          label={'Type of Property/Type of Use'}
          items={store['typeOfProperty']}
          value={typeOfProperty}
          changeListener={buildListener('typeOfProperty')}/>
      <InputNumber
          label={'Amount in CHF'}
          value={amount}
          changeListener={buildListener('amount')}/>
      <InputNumber
          label={'Market value in CHF'}
          value={marketValue}
          changeListener={buildListener('marketValue')}/>
      <InputNumber
          label={'Mortgage amount in CHF'}
          value={mortgageAmount}
          changeListener={buildListener('mortgageAmount')}/>
      <Dropdown
          label={'Rating'}
          items={store['rating']}
          value={rating}
          changeListener={buildListener('rating')}/>
      <Dropdown
          label={'Rating Agency'}
          items={store['ratingAgency']}
          value={ratingAgency}
          changeListener={buildListener('ratingAgency')}/>
      <button>Fill-in sample data</button>
    </div>
  )
}

InputCollector.propTypes = {
  bank: PropTypes.string
  ,product: PropTypes.string
  ,payoutDate: PropTypes.string
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
}

export default InputCollector
