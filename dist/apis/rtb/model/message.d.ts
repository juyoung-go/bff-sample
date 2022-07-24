import { Headers } from './headers';
export interface Message {
    'headers': Headers;
    'size'?: number;
    'attachment'?: Array<string>;
}
