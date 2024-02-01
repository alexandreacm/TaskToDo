import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import Home from '../../src/screens/Home';

//Should validate if the field New Name is filled
//Should add a task
//Should add multiple tasks
//Should edit the task
//Should delete a task
//Should check a finish task
//should validate if Add button will be Edit button when edit a task

describe('HOME', () => {
  const tree = renderer.create(<Home />).toJSON();

  test('Should render correctly component', () => {
    render(<Home />);
  });

  test('Should create a snapshot test correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Should test the Header title', async () => {
    const {getByText} = render(<Home />);

    expect(getByText('Your Task')).toBeTruthy();
  });

  it('Should test the second Header title', async () => {
    const {getByText} = render(<Home />);

    expect(getByText(' Add New Task')).toBeTruthy();
  });
});
