import { ClassLoader } from './class-loader';
import { Environment } from './environment';
export interface ApplicationContext {
    'applicationName'?: string;
    'autowireCapableBeanFactory'?: object;
    'beanDefinitionCount'?: number;
    'beanDefinitionNames'?: Array<string>;
    'classLoader'?: ClassLoader;
    'displayName'?: string;
    'environment'?: Environment;
    'id'?: string;
    'parent'?: ApplicationContext;
    'parentBeanFactory'?: object;
    'startupDate'?: number;
}
