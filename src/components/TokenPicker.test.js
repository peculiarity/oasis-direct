/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';

import TokenPicker from './TokenPicker';


describe('(Component) TokenPicker', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TokenPicker {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
