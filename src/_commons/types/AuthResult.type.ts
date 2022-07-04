import { COUNTRY_CODE } from '@common/enums';

type AuthResult = {
  access_token: string;
  expired_time: number;
  dealer_name: string;
  name: string;
  country: COUNTRY_CODE;
};

export default AuthResult;
