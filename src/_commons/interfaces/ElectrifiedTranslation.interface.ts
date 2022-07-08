// description:
export default interface ElectrifiedTranslation {
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
  tranlations: Array<Electrified_T>;
}

// description:
export interface Electrified_T {
  // description:
  language: string;
  // description:
  electrifies: Array<Electrified_T_Item>;
}

export interface Electrified_T_Item {
  // description:
  electrified_item_name: string;
  // description:
  electrified_subtitle: string;
  // description:
  asset_version: number;
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
}

// description:
export interface Template_1_T {
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
  video: string;
  // description:
  video_image: string;
}

// description:
export interface Template_2_T {
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
}

// description:
export interface Template_3_T {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  viewable: boolean;
  // description:
  image: string;
}

// description:
export interface Template_2_item_1 {
  // description:
  translation_status: boolean;
  // description:
  layout_type: string;
  // description:
  image: string;
  // description:
  comment: string;
  // description:
  description: string;
}

// description:
export interface Template_2_item_2 {
  // description:
  translation_status: boolean;
  // description:
  image: string;
  // description:
  title: string;
  // description:
  comment: string;
  // description:
  description: string;
}
