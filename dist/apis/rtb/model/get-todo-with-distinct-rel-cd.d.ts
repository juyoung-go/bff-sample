import { GetTodoOut } from './get-todo-out';
import { TipAndTodoTgtRelCdOut } from './tip-and-todo-tgt-rel-cd-out';
export interface GetTodoWithDistinctRelCd {
    'relCds'?: Array<TipAndTodoTgtRelCdOut>;
    'todos'?: Array<GetTodoOut>;
}
