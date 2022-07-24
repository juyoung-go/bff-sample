import ResponseMetadata from './ResponseMetadata';
import SdkHttpMetadata from './SdkHttpMetadata';
import CodeDeliveryDetailsType from './CodeDeliveryDetailsType';
export default interface SignUpResult {
    codeDeliveryDetails?: CodeDeliveryDetailsType;
    sdkHttpMetadata?: SdkHttpMetadata;
    sdkResponseMetadata?: ResponseMetadata;
    userConfirmed?: boolean;
    userSub?: string;
}
