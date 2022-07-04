// description:
type ElectrifiedAll = {
  // description:
  electrified_item_name: string;
  // description:
  electrified_version: number;
  // description:
  electrified_subtitle: string;
  // description:
  main_image: string;
  // description:
  rotation_image: string;
  // description:
  calculation_image: string;
  // description:
  calculation_formula: any;
  // description:
  main: Template_3;
  // description:
  highlights: Array<Template_1 | Template_2 | Template_3>;
  // description:
  charging: Array<Template_1 | Template_2 | Template_3>;
  // description:
  benefits: Array<Template_1 | Template_2 | Template_3>;
};

// description:
export type Template_1 = {
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
  video: string;
  // description:
  video_image: string;
};

// description:
export type Template_2 = {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  contents: Array<Template_2_item_1 | Template_2_item_2>;
};

// description:
export type Template_3 = {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  image: string;
};

export type Template_2_item_1 = {
  // description:
  layout_type: string;
  // description:
  image: string;
  // description:
  comment: string;
  // description:
  description: string;
};

// description:
export type Template_2_item_2 = {
  // description:
  image: string;
  // description:
  title: string;
  // description:
  comment: string;
  // description:
  description: string;
};

export default ElectrifiedAll;
