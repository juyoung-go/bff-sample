import { ApplicationContext } from './application-context';
export interface RedirectView {
    'applicationContext'?: ApplicationContext;
    'attributesMap'?: object;
    'beanName'?: string;
    'contentType'?: string;
    'exposePathVariables'?: boolean;
    'hosts'?: Array<string>;
    'propagateQueryProperties'?: boolean;
    'redirectView'?: boolean;
    'requestContextAttribute'?: string;
    'staticAttributes'?: object;
    'url'?: string;
}
