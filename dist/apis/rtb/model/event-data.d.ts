import { DeliveryStatus } from './delivery-status';
import { Message } from './message';
import { Storage } from './storage';
export interface EventData {
    'event': string;
    'id': string;
    'timestamp': string;
    'delivery-status'?: DeliveryStatus;
    'message': Message;
    'storage'?: Storage;
    'recipient': string;
    'recipient-domain'?: string;
    'severity'?: string;
    'reason'?: string;
    'url'?: string;
}
