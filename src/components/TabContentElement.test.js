import React from 'react';
import { shallow } from 'enzyme';
import TabContentElement from './TabContentElement';
import tabData from '../tabs';

describe('TabContentElement', () => {
  let props = {
    content: tabData.tabs[0].content[0],
    setFullPageImage: jest.mock,
    removeFullPageImage: jest.mock,
    fullPageImage: false
  };
  let tabContentElement = shallow(<TabContentElement {...props} />);

  it('renders properly', () => expect(tabContentElement).toMatchSnapshot());

  it('displays the correct paragraph text', () => {
    const expectedContent = tabData.tabs[0].content[0].content;
    expect(tabContentElement.find('p').text()).toEqual(expectedContent);
  });

  it('contains an img tag with the correct href', () => {
    let props = {
      content: tabData.tabs[0].content[1],
      setFullPageImage: jest.mock,
      removeFullPageImage: jest.mock,
      fullPageImage: false
    };
    let tabContentElement = shallow(<TabContentElement {...props} />);

    expect(tabContentElement
      .find(`img[src="${tabData.tabs[0].content[1].content}"]`)
      .exists()
    ).toBe(true);
  });
});
