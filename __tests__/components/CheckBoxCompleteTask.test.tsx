import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import CheckBoxCompleteTask from '../../src/components/CheckBoxCompleteTask';
import {mocks} from '../__mocks__';

describe('CHECKBOX_COMPLETE_TASK', () => {
  it('Should render correctly the component', () => {
    render(<CheckBoxCompleteTask />);
  });
  it('Should match the CheckBoxCompleteTask style', () => {
    const {getByTestId} = render(<CheckBoxCompleteTask isChecked={true} />);

    expect(getByTestId('viewBody').props.style.backgroundColor).toBe(
      mocks.colors.ui.PRIMARY,
    );
  });

  it('Should match when the isChecked parameter is false', () => {
    const {getByTestId} = render(<CheckBoxCompleteTask isChecked={false} />);
    expect(getByTestId('viewBody').props.style.borderColor).toEqual(
      mocks.colors.ui.BLACK,
    );
  });
});
