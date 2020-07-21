import React from 'react';
import { shallow } from 'enzyme';
import CategoryItem from '../../components/CategoryItem';
import { IGif } from '../../interfaces/gifListInterface';

describe('CategoryItem', () => {
  let wrapper: any;
  let mockItem: IGif = {
    id: 'first',
    img: '',
    title: 'mock Item'
  };

  beforeEach(() => {
    wrapper = shallow(<CategoryItem item={mockItem} />);
  });

  it('Component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Component should have title ', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(mockItem.title);
  });
});
