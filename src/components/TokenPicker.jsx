import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';

import './TokenPicker.scss';
import TokenPickerItem from './TokenPickerItem';
import CloseButton from './CloseButton';


const propTypes = PropTypes && {
  onTokenSelected: PropTypes.func.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  tokens: PropTypes.instanceOf(Immutable.List).isRequired,
  activeTokenControlName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};
const defaultProps = {};


class TokenPicker extends PureComponent {

  tokens() {

    const {
      tokens,
      onTokenSelected,
      activeTokenControlName,
      isSelected
    } = this.props;

    return tokens.map(
        token => (
            <TokenPickerItem
                isSelected={isSelected}
                key={token.get('symbol')}
                activeTokenControlName={activeTokenControlName}
                onClick={onTokenSelected}
                tokenSymbol={token.get('symbol')}
            />
        )
    )
  }

  render() {
    const { onToggleOpen } = this.props;
    return (
      <div className={'TokenPicker'}>
        <CloseButton onClick={onToggleOpen}/>
        <div className='Tokens'>{this.tokens()}</div>
      </div>
    );
  }
}

TokenPicker.displayName = 'TokenPicker';
TokenPicker.propTypes = propTypes;
TokenPicker.defaultProps = defaultProps;
export default TokenPicker;
