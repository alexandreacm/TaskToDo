import React from 'react';
import {render} from '@testing-library/react-native';

import {CustomHeader} from '../../src/components/CustomHeader';

describe('HEADER', () => {
  it('Should render correctly component', () => {
    render(<CustomHeader title="" />);
  });

  it('Should test when the Header title is empty', async () => {
    const {queryAllByText} = render(<CustomHeader title="" />);

    expect(queryAllByText('textHeader').length).toBe(0);
  });

  it('Should test the Header title', async () => {
    const {getByTestId} = render(<CustomHeader title="Your Task" />);

    expect(getByTestId('textHeader')).toBeTruthy();
  });
});
