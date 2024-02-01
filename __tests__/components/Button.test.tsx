import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import CheckBoxCompleteTask from '../../src/components/CheckBoxCompleteTask';
import {mocks} from '../__mocks__';
import Button from '../../src/components/Button';

describe('BUTTON', () => {
  it('Should render correctly the component', () => {
    render(
      <Button
        text=""
        onPress={jest.fn()}
        color=""
        disabled={false}
        style={null}
        textStyle={null}
      />,
    );
  });

  it('Should test when the disabled property is true', () => {
    const {getByTestId} = render(
      <Button
        text=""
        onPress={jest.fn()}
        color=""
        disabled={true}
        style={{}}
        textStyle={{}}
      />,
    );

    expect(
      getByTestId('button').props.accessibilityState.disabled,
    ).not.toBeFalsy();
  });

  it('Should test the button title', () => {
    const {getByText} = render(
      <Button
        text="Add"
        onPress={jest.fn()}
        color=""
        disabled={true}
        style={{}}
        textStyle={{}}
      />,
    );

    expect(getByText('Add')).not.toBeNull();
  });
});
