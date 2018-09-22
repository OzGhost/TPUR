import React from 'react'
import PropTypes from 'prop-types'
import InputText from './InputText'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'
import StaticStore from '../common/StaticStore'

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
                        }) => {
  const store = StaticStore.getStore()

  return (
    <div className="input-collector">
      <Dropdown
          label={'Bank'}
          items={store['bank']}
          value={bank} />  
      <Dropdown
          label={'Product'}
          items={store['product']}
          value={product} />
      <InputText label={'Pay out date'} value={payoutDate} />
      <Checkbox
          label={'ETP feasibility'}
          value={etpFeasibility}/>
      <Checkbox
          label={'Violation minimal requirements'}
          value={violationMinimalRequirement}/>
      <Checkbox
          label={'Foreign surcharge'}
          value={foreignSurcharge}/>
      <Dropdown
          label={'Country'}
          items={store['country']}
          value={country}/>
      <Dropdown
          label={'Segment'}
          items={store['segment']}
          value={segment}/>
      <Dropdown
          label={'Business'}
          items={store['business']}
          value={business}/>
      <InputText label={'Contribution margin'} value={contributionMargin} />
      <Dropdown
          label={'Business Case'}
          items={store['businessCase']}
          value={businessCase}/>
      <Dropdown
          label={'Type of Property/Type of Use'}
          items={store['typeOfProperty']}
          value={typeOfProperty}/>
      <InputText label={'Amount in CHF'} value={amount} />
      <InputText label={'Market value in CHF'} value={marketValue} />
      <InputText label={'Mortgage amount in CHF'} value={mortgageAmount} />
      <Dropdown
          label={'Rating'}
          items={store['rating']}
          value={rating}/>
      <Dropdown
          label={'Rating Agency'}
          items={store['ratingAgency']}
          value={ratingAgency}/>
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
