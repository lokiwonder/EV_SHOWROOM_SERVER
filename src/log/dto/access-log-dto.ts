import { APP_TYPE } from '@common/enums';
import { IsNotEmpty, IsString } from 'class-validator';

export default class AccessLogDTO {
  @IsNotEmpty()
  @IsString()
  app_type: APP_TYPE;
  @IsNotEmpty()
  @IsString()
  app_id: string;
  @IsNotEmpty()
  @IsString()
  device_info: string;
  @IsNotEmpty()
  @IsString()
  dealer_code: string;
}
