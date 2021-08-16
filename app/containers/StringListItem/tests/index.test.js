/**
 * Test the repo list item
 */

import React from 'react';
import { getByText, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import StringListItem from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <StringListItem {...props} />
    </IntlProvider>,
  );

describe('<StringListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = 'test';
  });

  it('should render the string', () => {
    const { container } = renderComponent({ item });
    expect(getByText(container, content => content)).not.toBeNull();
  });

  it('should render a ListItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });
});
