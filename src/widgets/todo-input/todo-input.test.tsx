import { render, screen, fireEvent } from '@testing-library/react';
import { TodoInput } from './todo-input';
import { vi } from 'vitest';
import { useAdd } from './use-add';

vi.mock('./use-add', () => ({
  useAdd: vi.fn(),
}));

describe('TodoInput', () => {
  it('При нажатии на кнопку вызывается функция создания задачи', () => {
    // arrange
    const mockHandleAdd = vi.fn();
    const mockSetTitle = vi.fn();
    const mockTitle = 'Test title';

    (useAdd as jest.Mock).mockReturnValue({
      handleAdd: mockHandleAdd,
      title: mockTitle,
      setTitle: mockSetTitle,
    });

    // act
    render(<TodoInput />);

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('save-task');

    fireEvent.change(input, {
      target: { value: 'New title test' },
    });
    fireEvent.click(button);

    // assert
    expect(mockSetTitle).toHaveBeenCalledWith('New title test');
    expect(mockHandleAdd).toHaveBeenCalled();
  });
});
