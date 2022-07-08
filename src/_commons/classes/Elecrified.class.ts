import { COUNTRY_CODE, LANGUAGE_CODE } from '@common/enums';
import IElectrifiedData, {
  ISetting,
} from '@common/interfaces/Electrified.interface';
import { Electrified_T } from '@common/interfaces/ElectrifiedTranslation.interface';

export class ElectrifiedData implements IElectrifiedData {
  setting: ISetting;
  translations: Array<Electrified_T>;
  constructor(setting: ISetting, translations: Array<Electrified_T>) {
    this.setting = setting;
    this.translations = translations;
  }
}

export class Setting implements ISetting {
  app_id: string;
  app_type: string;
  nation: COUNTRY_CODE;
  app_version: number;
  electrified_version: number;
  translation_version: number;
  languages: Array<LANGUAGE_CODE>;
  constructor(
    app_id: string,
    app_type: string,
    nation: COUNTRY_CODE,
    app_version: number,
    electrified_version: number,
    translation_version: number,
    languages: Array<LANGUAGE_CODE>,
  ) {
    this.app_id = app_id;
    this.app_type = app_type;
    this.nation = nation;
    this.app_version = app_version;
    this.electrified_version = electrified_version;
    this.translation_version = translation_version;
    this.languages = languages;
  }
}
