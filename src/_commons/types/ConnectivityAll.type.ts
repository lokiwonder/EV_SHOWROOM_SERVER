import { Template_2_item_1, Template_2_item_2 } from './ElectrifiedAll.type';

// description:
type ConnectivityAll = {
  // description:
  connectivity_version: number;
  // description:
  bluelink: Array<
    TemplateConnectivity | TemplateConnectivitySub | TemplateConnectivitySub_2
  >;
  // description:
  charge_myHyundai: Array<
    TemplateConnectivity | TemplateConnectivitySub | TemplateConnectivitySub_2
  >;
};

// description:
export type TemplateConnectivity = {
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
};

// description:
export type TemplateConnectivitySub = {
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
};

// description:
export type TemplateConnectivitySub_2 = {
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
};

export default ConnectivityAll;
