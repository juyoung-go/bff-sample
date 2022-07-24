import { GetSmsSendByRcvrTypeAndPkOut } from './get-sms-send-by-rcvr-type-and-pk-out';
export interface PagingGetSmsSendByRcvrTypeAndPkOut {
    'bfirstPage': boolean;
    'blastPage': boolean;
    'endRow': number;
    'firstPageNum': number;
    'hasNextPage': boolean;
    'hasPreviousPage': boolean;
    'lastPageNum': number;
    'list': Array<GetSmsSendByRcvrTypeAndPkOut>;
    'orderBy'?: string;
    'pageNum': number;
    'pageSize': number;
    'pages': number;
    'startRow': number;
    'total': number;
}
