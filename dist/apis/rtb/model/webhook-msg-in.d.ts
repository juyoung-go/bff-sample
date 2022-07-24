import { EventData } from './event-data';
import { Signature } from './signature';
export interface WebhookMsgIn {
    'signature': Signature;
    'event-data': EventData;
}
