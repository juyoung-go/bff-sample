import { Pageable } from './pageable';
import { SearchConditionOut } from './search-condition-out';
import { Sort } from './sort';
export interface PageSearchConditionOut {
    'content'?: Array<SearchConditionOut>;
    'empty'?: boolean;
    'first'?: boolean;
    'last'?: boolean;
    'number'?: number;
    'numberOfElements'?: number;
    'pageable'?: Pageable;
    'size'?: number;
    'sort'?: Sort;
    'totalElements'?: number;
    'totalPages'?: number;
}
