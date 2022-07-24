import { Request } from 'express';
export interface Header {
    token: string;
}
export declare const HeaderStore: {
    create(req: Request): void;
    remove(execId: number): void;
    printCurrStack(execId: any): void;
};
export declare const getHeader: () => Header;
