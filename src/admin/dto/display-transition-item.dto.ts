import { APP_TYPE, COUNTRY_CODE, LANGUAGE_CODE } from '@common/enums';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class DisplayTransitionItemDTO {
  @IsNotEmpty()
  app_type: APP_TYPE;
  @IsNotEmpty()
  country: COUNTRY_CODE;
  @IsNotEmpty()
  group: string;
  @IsNotEmpty()
  language: LANGUAGE_CODE;

  item_group: string;
  @IsNotEmpty()
  @IsNumber()
  sequence_number: number;
}
