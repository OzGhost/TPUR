import PropTypes from "prop-types";
import React from "react";
import StaticStore from "../common/StaticStore";
import Dropdown from "./Dropdown";
import InputNumber from "./InputNumber";
import UniqueId from "../common/UniqueId";

class AdditionalSecurities extends React.Component {

  static propTypes = {
    additionalSecurities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired,
    onRemove: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
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
    this.submit = this.submit.bind(this);
  };

  remove = id => {
    this.props.onRemove(id);
  };

  typeChangeListener = typeCode => {
    this.setState({
      ...this.state,
      type: typeCode
    });
  };

  valueChangeListener = value => {
    this.setState({
      ...this.state,
      value: value
    });
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

  submit = () => {
    if (this.state.type == "" || this.state.value < 1) {
      return;
    }
    var currentKeys = this.props.additionalSecurities.map(e => e.id);
    var next = {...this.state, id: UniqueId.nextWithout(currentKeys)};
    this.props.onAdd(next);
  }

  render = () => {
    const store = StaticStore.getStore();
    return (
      <div className="additional-securities-frame">
        <p>Additional securities</p>
        <div className="additional-securities">
          {this.props.additionalSecurities.map(item => 
            <div className="additional-security-item" key={item.id}>
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
          <button onClick={this.submit}>+</button>
        </div>
      </div>
    );
  };
}

export default AdditionalSecurities;

