import React, { Component } from 'react';
import web3 from  '../web3';

class SetAssets extends Component {

  changeType = () => {
    this.props.changeType(this.type.value);
  }

  tokenPicker = (name) => {
    return(
      <div className='select'>
        <select ref={ (input) => this[name] = input }>
          {/* <option value="eth">Ether</option> */}
          <option value="weth">WEther</option>
          <option value="mkr">Maker</option>
          <option value="sai">Sai</option>
        </select>
      </div>
    )
  }

  nextStep = (e) => {
    e.preventDefault();
    if (this.type.value === 'basic') {
      this.props.goToDetailsBasicStep(this.from.value, this.to.value);
    }
    return false;
  }

  render() {
    return (
      <div>
        <h2>Choose which Asssets to trade</h2>
        <form onSubmit={ this.nextStep }>
          <h3>Select Type of Trade</h3>
          <div className='select'>
            <select ref={ (input) => this.type = input } onChange={ this.changeType }>
              <option value="basic">Basic</option>
              <option value="margin">Margin</option>
            </select>
          </div>
          {
            this.props.type === 'basic'
            ?
              <div>
                { this.tokenPicker('from') }
                { this.tokenPicker('to') }
              </div>
            :
              <div>
              </div>
          }
          <button
            type="submit"
          >Continue</button>
        </form>
      </div>
    )
  }
}

export default SetAssets;
