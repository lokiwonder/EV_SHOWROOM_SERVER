// description:
type ElectrifiedTranslation = {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  default_language: string;
  // description:
  electrified_version: number;
  // description:
  translation_version: number;
  // description:
  displayable_electrifies: Array<string>;
  // description:
  translations: Array<Electrified_T>;
};

// description:
export type Electrified_T = {
  // description:
  language: string;
  // description:
  electrifies: Array<Electrified_T_Item>;
};

export type Electrified_T_Item = {
  // description:
  electrified_item_name: string;
  // description:
  electrified_subtitle: string;
  // description:
  electrified_version: number;
  // description:
  main_image: string;
  // description:
  rotation_image: string;
  // description:
  calculation_image: string;
  // description:
  calculation_formula: string;
  // description:
  main: Template_3_T;
  // description:
  highlights: Array<Template_1_T | Template_2_T | Template_3_T>;
  // description:
  charging: Array<Template_1_T | Template_2_T | Template_3_T>;
  // description:
  benefits: Array<Template_1_T | Template_2_T | Template_3_T>;
};

// description:
export type Template_1_T = {
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
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
export type Template_2_T = {
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  contents: Array<Template_2_item_1_T | Template_2_item_2_T>;
};

// description:
export type Template_3_T = {
  // description:
  viewable: boolean;
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  image: string;
};

// description:
export type Template_2_item_1_T = {
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
export type Template_2_item_2_T = {
  // description:
  image: string;
  // description:
  title: string;
  // description:
  comment: string;
  // description:
  description: string;
};

export default ElectrifiedTranslation;
