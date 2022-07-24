import { PatchBldPhtIn } from './patch-bld-pht-in';
export interface PatchBldPhtsIn {
    'bldId'?: string;
    'lwh'?: boolean;
    'pht'?: Array<PatchBldPhtIn>;
    'isLwh'?: boolean;
}
