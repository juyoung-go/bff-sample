import { Module } from './module';
import { Package } from './package';
export interface ClassLoader {
    'definedPackages'?: Array<Package>;
    'name'?: string;
    'parent'?: ClassLoader;
    'registeredAsParallelCapable'?: boolean;
    'unnamedModule'?: Module;
}
