import { COUNTRY_CODE } from '@common/enums';
import { IsNotEmpty, IsString } from 'class-validator';

export default class ElectrifiedDataDTO {
  @IsNotEmpty()
  @IsString()
  app_id: string;

  @IsNotEmpty()
  @IsString()
  country_code: COUNTRY_CODE;

  @IsNotEmpty()
  @IsString()
  device_info: string;

  @IsNotEmpty()
  @IsString()
  dealer_code: string;
}
