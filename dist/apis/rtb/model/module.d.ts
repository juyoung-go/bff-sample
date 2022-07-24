import { ClassLoader } from './class-loader';
import { ModuleDescriptor } from './module-descriptor';
export interface Module {
    'annotations'?: Array<object>;
    'classLoader'?: ClassLoader;
    'declaredAnnotations'?: Array<object>;
    'descriptor'?: ModuleDescriptor;
    'layer'?: object;
    'name'?: string;
    'named'?: boolean;
    'packages'?: Array<string>;
}
