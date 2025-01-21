import { test, expect } from '@playwright/test';

test.describe('Создание задачи', () => {
  test('', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.fill('[data-testid="todo-input"]', 'Test task');
    await page.click('[data-testid="save-task"]');

    await page.waitForSelector('[data-testid="task-container"]');
    const newTaskDone = page.getByTestId('task-done');
    const newTaskTitle = page.getByTestId('task-title');
    const newTaskDelete = page.getByTestId('task-delete');
    expect(newTaskTitle).toHaveText('Test task');

    await newTaskDone.click();
    const backgroundColorHex = await newTaskDone.evaluate(
      (e) => window.getComputedStyle(e).backgroundColor
    );
    expect(backgroundColorHex).toBe('rgb(0, 255, 0)');

    await newTaskDelete.click();
    await page.waitForSelector('[data-testid="task-container"]', {
      state: 'detached',
    });
  });
});
