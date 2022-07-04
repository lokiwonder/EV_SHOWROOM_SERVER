import {
  Template_2_item_1,
  Template_2_item_2,
} from './ElectrifiedAll.interface';
import { Template_2_T } from './ElectrifiedTranslation.interface';

// description:
export default interface ConnectivityTranslation {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  default_language: string;
  // description:
  connectivity_version: number;
  // description:
  translation_version: number;
  // description:
  translations: Array<Connectivity_T>;
}

// description:
export interface Connectivity_T {
  // description:
  language: string;
  // description:
  bluelink: Array<
    TemplateConnectivity_T | TemplateConnectivitySub_T | Template_2_T
  >;
  // description:
  charge_myHyundai: Array<
    TemplateConnectivity_T | TemplateConnectivitySub_T | Template_2_T
  >;
}

// description:
export interface TemplateConnectivity_T {
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
  features: Array<string>;
}

// description:
export interface TemplateConnectivitySub_T {
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
  feature: string;
}

// description:
export interface TemplateConnectivitySub_2 {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  contents: Array<Template_2_item_1 | Template_2_item_2>;
  // description:
  feature: string;
  // description:
  first: boolean;
}
