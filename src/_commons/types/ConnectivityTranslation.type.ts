import {
  Template_2_item_1_T,
  Template_2_item_2_T,
} from './ElectrifiedTranslation.type';

// description:
type ConnectivityTranslation = {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  connectivity_version: number;
  // description:
  translation_version: number;
  // description:
  default_language: string;
  // description:
  translations: Array<Connectivity_T>;
};

// description:
export type Connectivity_T = {
  // description:
  language: string;
  // description:
  bluelink: Array<
    | TemplateConnectivity_T
    | TemplateConnectivitySub_T
    | TemplateConnectivitySub_2_T
  >;
  // description:
  charge_myHyundai: Array<
    | TemplateConnectivity_T
    | TemplateConnectivitySub_T
    | TemplateConnectivitySub_2_T
  >;
};

// description:
export type TemplateConnectivity_T = {
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
  // description:
  first: boolean;
};

// description:
export type TemplateConnectivitySub_T = {
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
  // description:
  first: boolean;
};

// description:
export type TemplateConnectivitySub_2_T = {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  contents: Array<Template_2_item_1_T | Template_2_item_2_T>;
  // description:
  feature: string;
  // description:
  first: boolean;
};

export default ConnectivityTranslation;
