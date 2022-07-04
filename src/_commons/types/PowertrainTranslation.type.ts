import { Template_1_T } from './ElectrifiedTranslation.type';
import { TemplatePowertrainItem } from './PowertrainAll.type';

// description:
type PowertrainTranslation = {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  powertrain_version: number;
  // description:
  translation_version: number;
  // description:
  default_language: string;
  // description:
  translations: Array<Powertrain_T>;
};

// description:
export type Powertrain_T = {
  // description:
  language: string;
  // description:
  mild_hybrid: Array<Template_1_T | TemplatePowertrain_T | TemplateLottie_T>;
  // description:
  hydrogen: Array<Template_1_T | TemplatePowertrain_T | TemplateLottie_T>;
  // description:
  full_electric: Array<Template_1_T | TemplatePowertrain_T | TemplateLottie_T>;
  // description:
  plug_in_hybrid: Array<Template_1_T | TemplatePowertrain_T | TemplateLottie_T>;
  // description:
  hybrid: Array<Template_1_T | TemplatePowertrain_T | TemplateLottie_T>;
};

// description:
export type TemplatePowertrain_T = {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  title: string;
  // description:
  comment: string;
  // description:
  description: string;
  // description:
  image: string;
  // description:
  vehicles: Array<TemplatePowertrainItem>;
};

// description:
export type TemplateLottie_T = {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  title: string;
  // description:
  comment: string;
  // description:
  description: string;
  // description:
  image: string;
  // description:
  lottie: string;
};

export default PowertrainTranslation;
