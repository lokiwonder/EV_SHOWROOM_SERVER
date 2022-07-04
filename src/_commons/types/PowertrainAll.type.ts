import { Template_1 } from './ElectrifiedAll.type';

// description:
type PowertrainAll = {
  // description:
  powertrain_version: number;
  // description:
  mild_hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  hydrogen: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  full_electric: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  plug_in_hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
};

// description:
export type TemplatePowertrain = {
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
  vehicles: Array<TemplatePowertrainItem>;
};

// description:
export type TemplateLottie = {
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
  lottie: string;
};

// description:
export type TemplatePowertrainItem = {
  // description:
  vehicle_model_name: number;
  // description:
  vehicle_model_image: string;
};

export default PowertrainAll;
