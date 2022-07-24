import { GetContOut } from './get-cont-out';
import { GetTodoOut } from './get-todo-out';
export interface GetContTodoOut {
    'contList': Array<GetContOut>;
    'todoList': Array<GetTodoOut>;
}
