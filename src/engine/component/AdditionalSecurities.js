import PropTypes from "prop-types";
import React from "react";
import StaticStore from "../common/StaticStore";
import Dropdown from "./Dropdown";
import InputNumber from "./InputNumber";

class AdditionalSecurities extends React.Component {

  static propTypes = {
    additionalSecurities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      type: "",
      value: 0
    };

    this.remove = this.remove.bind(this);
    this.typeChangeListener = this.typeChangeListener.bind(this);
    this.valueChangeListener = this.valueChangeListener.bind(this);
  };

  remove = id => {
  };

  typeChangeListener = typeCode => {
  };

  valueChangeListener = value => {
  };

  getTypeName = typeCode => {
    const types = StaticStore.getStore().additionalSecurityTypes || [];
    const len = types.length;
    for (let i = 0; i < len; i++) {
      if (typeCode === types[i].code) {
        return types[i].name;
      }
    }
    return "";
  };

  render = () => {
    const store = StaticStore.getStore();
    return (
      <div className="additional-securities-frame">
        <p>Additional securities</p>
        <div className="additional-securities">
          {this.props.additionalSecurities.map(item => 
            <div className="additional-security-item">
              <div>{this.getTypeName(item.type)}</div>
              <div>{item.value}</div>
              <span onClick={()=>this.remove(item.id)}>&times;</span>
            </div>
          )}
        </div>
        <div className="additional-security-input">
          <Dropdown
              label="Type"
              items={store.additionalSecurityTypes}
              value={this.state.type}
              changeListener={this.typeChangeListener}
          />
          <InputNumber
              label="Value"
              value={this.state.value}
              changeListener={this.valueChangeListener}/>
          <button>+</button>
        </div>
      </div>
    );
  };
}

export default AdditionalSecurities;

