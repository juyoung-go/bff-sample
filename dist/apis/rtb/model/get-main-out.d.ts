import { GetContTodoOut } from './get-cont-todo-out';
import { GetStatisticOut } from './get-statistic-out';
export interface GetMainOut {
    'list'?: GetContTodoOut;
    'statistics'?: GetStatisticOut;
}
