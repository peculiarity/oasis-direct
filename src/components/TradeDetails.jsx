import React, {PureComponent} from 'react';
import {PropTypes} from 'prop-types';

import './TradeDetails.scss';
import TradeToken from '../components/TradeToken';
import AmountInput from './AmountInput';
import Pictogram from './Pictogram';
import Button from './Button';
import TokenPickerContainer from './../containers/TokenPicker'
import TradeDetailsInfoWrapper from '../containers/TradeDetailsInfo';


const propTypes = PropTypes && {
  onBuyAmountChange: PropTypes.func.isRequired,
  onDepositAmountChange: PropTypes.func.isRequired,
  onStartTransaction: PropTypes.func.isRequired,
  onToggleTokenPicker: PropTypes.func.isRequired,
  depositTokenValue: PropTypes.string.isRequired,
  buyTokenValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  depositTokenAmount: PropTypes.number,
  buyTokenAmount: PropTypes.number
};
const defaultProps = {};

class TradeDetails extends PureComponent {
  render() {
    const {
      onBuyAmountChange,
      onDepositAmountChange,
      onStartTransaction,
      onToggleTokenPicker,
      depositTokenValue,
      buyTokenValue,
      disabled,
      depositTokenAmount,
      buyTokenAmount
    } = this.props;

    return (
      <div className={'TradeDetails'}>
        <TokenPickerContainer/>
        <section className="TradeDetailsHeading">
          <h3>Choose which Assets to trade</h3>
        </section>
        <section>
          <form>
            <div>
              <div className='TradeTokenSelector'>
                <TradeToken
                  onToggleTokenPicker={onToggleTokenPicker}
                  controlName={'deposit'}
                  tokenSymbol={depositTokenValue}
                />
                <AmountInput
                  value={depositTokenAmount}
                  onChange={onDepositAmountChange}
                  name="deposit"
                  placeHolder="Deposit Amount"
                />
              </div>
              <div className="Separator">
                <Pictogram symbol={'trade'}/>
              </div>
              <div className='TradeTokenSelector'>
                <TradeToken
                  onToggleTokenPicker={onToggleTokenPicker}
                  controlName={'buy'}
                  tokenSymbol={buyTokenValue}
                />
                <AmountInput
                  value={buyTokenAmount}
                  onChange={onBuyAmountChange}
                  name="buy"
                  placeHolder="Receive Amount"
                />
              </div>
            </div>
            <div>
              <TradeDetailsInfoWrapper/>
            </div>
            <div>
              <Button
                  disabled={disabled}
                  onClick={onStartTransaction}
                  text={'Start transaction'}
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

TradeDetails.displayName = 'TradeDetails';
TradeDetails.propTypes = propTypes;
TradeDetails.defaultProps = defaultProps;
export default TradeDetails;