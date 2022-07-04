import { Template_1_T } from './ElectrifiedTranslation.interface';
import { TemplatePowertrainItem } from './PowertrainAll.interface';

// description:
export default interface PowertrainTranslation {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  default_language: string;
  // description:
  powertrain_version: number;
  // description:
  translation_version: number;
  // description:
  tranlations: Array<Powertrain_T>;
}

// description:
export interface Powertrain_T {
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
}

// description:
export interface TemplatePowertrain_T {
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
}

// description:
export interface TemplateLottie_T {
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
  lottie: string;
}
