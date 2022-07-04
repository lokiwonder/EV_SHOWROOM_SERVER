// description:
export default class CElectrifiedTranslation {
  // description:
  country: string;
  // description:
  languages: Array<string>;
  // description:
  default_language: string;
  // description:
  displayable_electrifies: Array<string>;
  // description:
  tranlations: Array<CElectrified_T>;
}

// description:
export class CElectrified_T {
  // description:
  language: string;
  // description:
  translation_version: number;
  // description:
  electrifies: Array<CElectrified_T_Item>;
}

export class CElectrified_T_Item {
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
  main: CTemplate_3_T;
  // description:
  highlights: Array<CTemplate_1_T | CTemplate_2_T | CTemplate_3_T>;
  // description:
  charging: Array<CTemplate_1_T | CTemplate_2_T | CTemplate_3_T>;
  // description:
  benefits: Array<CTemplate_1_T | CTemplate_2_T | CTemplate_3_T>;
}

// description:
export class CTemplate_1_T {
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
export class CTemplate_2_T {
  // description:
  sequence_number: number;
  // description:
  type: string;
  // description:
  translation_status: boolean;
  // description:
  viewable: boolean;
  // description:
  contents: Array<CTemplate_2_item_1 | CTemplate_2_item_2>;
}

// description:
export class CTemplate_3_T {
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
export class CTemplate_2_item_1 {
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
export class CTemplate_2_item_2 {
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
