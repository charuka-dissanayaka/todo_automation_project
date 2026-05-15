import {Page,expect} from '@playwright/test';


export class TodoPage {

    readonly page : Page; 

    constructor(page:Page){
     
        this.page =  page;

    }

    todoInput(){
        return this.page.getByPlaceholder('What needs to be done?')
    }

    todoCheckBox(todoname: string){
        return this.page.locator('li').filter({hasText: todoname}).getByRole('checkbox');
    }

    async navigate(){
        await this.page.goto('https://demo.playwright.dev/todomvc/#/');

    }

    async addTodo(todoText:string){
        await this.todoInput().fill(todoText);
        await this.todoInput().press('Enter');

    }

    async completeTodo(todoText :string){
        await this.todoCheckBox(todoText).click();
    }

    async verifyTodoCompleted(todoText:string){
        await expect(this.todoCheckBox(todoText)).toBeChecked();
    }

     async verifyItemsLeft(count: number) {
    await expect(
      this.page.getByText(`${count} item left`)
    ).toBeVisible();
  }

  // Screenshot
  async takeScreenshot() {
    await this.page.screenshot({
      path: 'screenshots/exercise1-result.png',
      fullPage: true
    });
  }
    

}