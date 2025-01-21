import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { Task } from './task';
import { useTask } from './use-task';

vi.mock('./use-task', () => ({
  useTask: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe('Task', () => {
  it('При нажатии на кнопку изменения выполненности функция изменения типа задачи вызывается нужное количество раз', () => {
    // arrange
    const mockHandleSwitch = vi.fn();
    const mockHandleRemove = vi.fn();
    const mockedID = '123';
    const mockedTitle = 'Test task';
    const mockedDone = false;

    (useTask as jest.Mock).mockReturnValue({
      handleSwitch: mockHandleSwitch,
      handleRemove: mockHandleRemove,
    });

    // act
    render(<Task id={mockedID} title={mockedTitle} done={mockedDone} />);
    const doneButton = screen.getByTestId('task-done');
    fireEvent.click(doneButton);
    fireEvent.click(doneButton);
    fireEvent.click(doneButton);

    // assert
    expect(mockHandleSwitch).toHaveBeenCalledTimes(3);
  });

  it('При нажатии на кнопку удаления задачи выполняется функция удаления', () => {
    // arrange
    const mockHandleSwitch = vi.fn();
    const mockHandleRemove = vi.fn();
    const mockedID = '123';
    const mockedTitle = 'Test task';
    const mockedDone = false;

    (useTask as jest.Mock).mockReturnValue({
      handleSwitch: mockHandleSwitch,
      handleRemove: mockHandleRemove,
    });

    // act
    render(<Task id={mockedID} title={mockedTitle} done={mockedDone} />);
    const deleteButton = screen.getByTestId('task-delete');
    fireEvent.click(deleteButton);

    // assert
    expect(mockHandleRemove).toHaveBeenCalled();
  });
});
