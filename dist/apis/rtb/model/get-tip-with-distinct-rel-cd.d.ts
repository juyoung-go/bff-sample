import { GetTipOut } from './get-tip-out';
import { TipAndTodoTgtRelCdOut } from './tip-and-todo-tgt-rel-cd-out';
export interface GetTipWithDistinctRelCd {
    'relCds'?: Array<TipAndTodoTgtRelCdOut>;
    'tips'?: Array<GetTipOut>;
}
