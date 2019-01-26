import React from 'react'
import PropTypes from 'prop-types'
import InputBlock from './InputBlock'
import IncreasementIndexer from '../common/IncreasementIndexer'
import GlobalEvent from '../common/GlobalEvent'

class Dropdown extends InputBlock {

  static propTypes = {
    value: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.any
    })).isRequired
  }

  constructor(props){
    super(props)
    
    this.state = {
      index: IncreasementIndexer.next()
    }

    this.toggle = this.toggle.bind(this)
    this.close = this.close.bind(this)
    this.getScreenValue = this.getScreenValue.bind(this)
  }

  componentDidMount = () => {
    /*
    let index = this.state.index;
    console.error("cout << drop down: "+index+" did mount");
    GlobalEvent.addEvent("click", function(originalEvent){
      console.error("cout << try to control: ", index);
    });
    */
  }

  componentWillUnmount = () => {
    console.log("cout << component will unmount");
  }

  toggle = () => {
    let current = this.state.isOpen
    this.setState({
      isOpen: !current
    })
  }

  close = () => {
    this.setState({
      isOpen: false
    })
  }

  getScreenValue = () => {
    var selected = this.props.items.filter(e => e.code === this.props.value)
    if (selected.length < 1)
      return '...'
    else
      return selected[0].name
  }

  /** @Override */
  valueExtract = e => {
    return e
  }
  
  /** @Override */
  buildInputElement = changeListener => {
    const { value, items } = this.props
    const { isOpen } = this.state

    const styleClass = 'dropdown' + (isOpen ? ' open' : '')

    const callback = val => () => {
      this.toggle()
      changeListener(val)
    }

    const screenVal = this.getScreenValue()

    return (
      <div className={styleClass}>
        <p className="dropdown__screen" onClick={this.toggle} title={screenVal}>
          {screenVal}
        </p>
        <div className="dropdown__slider">
          <ul className="dropdown__items">
            <li key={"undefined"}
                onClick={callback(undefined)}
            >...</li>
            {
              items.map(i => <li
                                key={i.code}
                                title={i.name}
                                onClick={callback(i.code)}
                              >{i.name}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Dropdown
