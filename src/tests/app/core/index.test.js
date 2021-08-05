import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Core from '../../../app/core';

describe('Test in Core component', () => {
  let wrapper = shallow(<Core />);

  test('Should render core', () => {
    wrapper.find('div#core');
  });
});
