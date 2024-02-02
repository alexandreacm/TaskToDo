import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../../src/screens/Home';

//Should check a finish task

describe('HOME', () => {
  jest.runAllTimers();

  const tree = renderer.create(<Home />).toJSON();

  test('Should render correctly component', () => {
    render(<Home />);
  });

  test('Should create a snapshot test correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('Should test the Header title', () => {
    const {getByText} = render(<Home />);

    expect(getByText('Your Task')).toBeTruthy();
  });

  it('Should test the second Header title', () => {
    const {getByText} = render(<Home />);

    expect(getByText(' Add New Task')).toBeTruthy();
  });

  it('Should add a task', async () => {
    const {getByTestId, queryAllByText, debug} = render(<Home />);

    const inputTask = getByTestId('inputTask');
    const button = getByTestId('button');

    const createFirstTask = 'Task 1';

    act(() => {
      fireEvent.changeText(inputTask, createFirstTask);
      fireEvent.press(button);
    });

    const tasks = queryAllByText(/task/i);

    expect(tasks.length).toBe(2);
  });

  it('Should add multiple tasks', async () => {
    const {getByTestId, queryAllByText, debug} = render(<Home />);

    const createFirstTask_1 = 'Task 1';
    const createFirstTask_2 = 'Task 2';

    const inputTask = getByTestId('inputTask');
    const button = getByTestId('button');

    act(() => {
      fireEvent.changeText(inputTask, createFirstTask_1);
      fireEvent.press(button);

      fireEvent.changeText(inputTask, createFirstTask_2);
      fireEvent.press(button);
    });

    const tasks = queryAllByText(/task/i);

    expect(tasks.length).toBe(2);
  });

  it('Should validate if the field New Name is filled', () => {
    const {getByTestId} = render(<Home />);

    const button = getByTestId('button');
    fireEvent.press(button);

    const labelTaskError = getByTestId('labelTaskError');

    expect(labelTaskError).not.toBeNull();
  });

  it('Should validate if the error will appeared', () => {
    const {queryAllByText, getByTestId} = render(<Home />);

    const button = getByTestId('button');
    fireEvent.press(button);

    const labelTaskError = queryAllByText('*');

    expect(labelTaskError.length).toBe(1);
  });

  it('Should edit the task', () => {
    const {getByTestId, queryAllByText, queryByText, debug} = render(<Home />);

    const createFirstTask = 'first item';
    const createFirstTask_2 = 'second item';

    const inputTask = getByTestId('inputTask');
    const button = getByTestId('button');

    fireEvent.changeText(inputTask, createFirstTask);
    fireEvent.press(button);

    const onClickTask = queryAllByText(/first/i);
    fireEvent.press(onClickTask[0]);

    fireEvent.changeText(inputTask, createFirstTask_2);
    fireEvent.press(button);

    const taskRe = queryAllByText(/second/i);

    expect(taskRe.length).toBe(1);
  });

  it('should validate if Add button will be Edit button when edit a task', () => {
    const {getByTestId, queryAllByText, debug} = render(<Home />);

    const createFirstTask = 'first item';

    const inputTask = getByTestId('inputTask');
    const button = getByTestId('button');

    fireEvent.changeText(inputTask, createFirstTask);
    fireEvent.press(button);

    const onClickTask = queryAllByText(/first/i);
    fireEvent.press(onClickTask[0]);

    const editButton = queryAllByText(/edit/i);

    expect(editButton.length).toBe(1);
  });

  it('Should delete a task', () => {
    const {getByTestId, queryAllByText, debug} = render(<Home />);

    const createFirstItem = 'first item';
    const createSecondItem = 'second item';

    const inputTask = getByTestId('inputTask');
    const button = getByTestId('button');

    fireEvent.changeText(inputTask, createFirstItem);
    fireEvent.press(button);

    fireEvent.changeText(inputTask, createSecondItem);
    fireEvent.press(button);

    const removeButton = queryAllByText(/remove/i)[0];
    fireEvent.press(removeButton);

    expect(createSecondItem).not.toBe(null);
  });
});
