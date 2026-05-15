import { test } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test('TodoMVC beginner automation', async ({ page }) => {

  const todoPage = new TodoPage(page);

  // Navigate to app
  await todoPage.navigate();

  // Add 2 todo items
 
  await todoPage.addTodo('Learn Playwright');
  await todoPage.addTodo('Write TypeScript Automation');

  // Complete 1 item
  await todoPage.completeTodo('Learn Playwright');
  await page.waitForTimeout(3000);

  // Verify completed state
  await todoPage.verifyTodoCompleted('Learn Playwright');

  // Verify count
  await todoPage.verifyItemsLeft(1);

  // Take screenshot
  await todoPage.takeScreenshot();

});