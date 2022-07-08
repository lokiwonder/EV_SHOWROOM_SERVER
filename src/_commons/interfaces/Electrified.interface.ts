import { COUNTRY_CODE, LANGUAGE_CODE } from '@common/enums';
import { Electrified_T } from './ElectrifiedTranslation.interface';

// description:
export default interface IElectrifiedData {
  setting: ISetting;
  translations: Array<Electrified_T>;
}

export interface ISetting {
  app_id: string;
  app_type: string;
  nation: COUNTRY_CODE;
  app_version: number;
  translation_version: number;
  languages: Array<LANGUAGE_CODE>;
}
