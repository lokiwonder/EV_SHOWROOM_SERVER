import { COUNTRY_CODE } from '@common/enums';

// description:
type AuthJwt = {
  // description:
  id: string;
  // description:
  dealer_code: string;
  // description:
  country: COUNTRY_CODE;
  // description:
  dealership: string;
};

export default AuthJwt;
