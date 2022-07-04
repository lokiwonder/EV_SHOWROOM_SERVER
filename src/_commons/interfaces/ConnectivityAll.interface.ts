import {
  Template_2,
  Template_2_item_1,
  Template_2_item_2,
} from './ElectrifiedAll.interface';

// description:
export default interface ConnectivityAll {
  // description:
  connectivity_version: number;
  // description:
  bluelink: Array<TemplateConnectivity | TemplateConnectivitySub | Template_2>;
  // description:
  charge_myHyundai: Array<
    TemplateConnectivity | TemplateConnectivitySub | Template_2
  >;
}

// description:
export interface TemplateConnectivity {
  // description:
  sequence_number: number;
  // description:
  type: string;
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
}

// description:
export interface TemplateConnectivitySub {
  // description:
  sequence_number: number;
  // description:
  type: string;
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
}

// description:
export interface TemplateConnectivitySub_2 {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  contents: Array<Template_2_item_1 | Template_2_item_2>;
  // description:
  feature: string;
  // description:
  first: boolean;
}
