import { APP_TYPE, COUNTRY_CODE, LANGUAGE_CODE } from '@common/enums';
import { IsNotEmpty } from 'class-validator';

export class DisplayTransitionDTO {
  @IsNotEmpty()
  app_type: APP_TYPE;
  @IsNotEmpty()
  country: COUNTRY_CODE;
  @IsNotEmpty()
  group: string;
  @IsNotEmpty()
  language: LANGUAGE_CODE;
}
