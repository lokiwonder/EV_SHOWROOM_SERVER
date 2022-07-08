import {
  TEMPLATE_1,
  TEMPLATE_2,
  TEMPLATE_3,
  TEMPLATE_CONNECTIVITY,
  TEMPLATE_CONNECTIVITY_SUB,
  TEMPLATE_CONNECTIVITY_SUB2,
  TEMPLATE_LOTTIE,
  TEMPLATE_POWERTRAIN,
} from '@common/constants';
import { LANGUAGE_CODE } from '@common/enums';
import { ElectrifiedAll } from '@common/types';
import ConnectivityAll, {
  TemplateConnectivity,
  TemplateConnectivitySub,
  TemplateConnectivitySub_2,
} from '@common/types/ConnectivityAll.type';
import {
  Connectivity_T,
  TemplateConnectivitySub_2_T,
  TemplateConnectivitySub_T,
  TemplateConnectivity_T,
} from '@common/types/ConnectivityTranslation.type';
import {
  Template_1,
  Template_2,
  Template_3,
} from '@common/types/ElectrifiedAll.type';
import {
  Electrified_T,
  Electrified_T_Item,
  Template_1_T,
  Template_2_T,
  Template_3_T,
} from '@common/types/ElectrifiedTranslation.type';
import PowertrainAll, {
  TemplateLottie,
  TemplatePowertrain,
} from '@common/types/PowertrainAll.type';
import {
  Powertrain_T,
  TemplateLottie_T,
  TemplatePowertrain_T,
} from '@common/types/PowertrainTranslation.type';

// todo: description 작성 //
export const initializeElectrifiedTranslation = (
  language: LANGUAGE_CODE,
  electrified_all: Array<ElectrifiedAll>,
) => {
  const electrifies = new Array<Electrified_T_Item>();

  electrified_all.forEach((electrified) => {
    const main: Template_3_T = {
      ...(electrified.main as Template_3),
      viewable: true,
    };

    const highlights = new Array<Template_1_T | Template_2_T | Template_3_T>();
    const charging = new Array<Template_1_T | Template_2_T | Template_3_T>();
    const benefits = new Array<Template_1_T | Template_2_T | Template_3_T>();

    electrified.highlights.forEach((template) => {
      if (template.type === TEMPLATE_1) {
        const {} = template;
        const tmp_template: Template_1_T = {
          ...(template as Template_1),
          translation_status: false,
          viewable: true,
        };
        highlights.push(tmp_template);
      } else if (template.type === TEMPLATE_2) {
        const tmp_template: Template_2_T = {
          ...(template as Template_2),
          translation_status: false,
          viewable: true,
        };
        highlights.push(tmp_template);
      } else if (template.type === TEMPLATE_3) {
        const tmp_template: Template_3_T = {
          ...(template as Template_3),
          viewable: true,
        };
        highlights.push(tmp_template);
      }
    });

    electrified.charging.forEach((template) => {
      if (template.type === TEMPLATE_1) {
        const tmp_template: Template_1_T = {
          ...(template as Template_1),
          translation_status: false,
          viewable: true,
        };
        charging.push(tmp_template);
      } else if (template.type === TEMPLATE_2) {
        const tmp_template: Template_2_T = {
          ...(template as Template_2),
          translation_status: false,
          viewable: true,
        };
        charging.push(tmp_template);
      } else if (template.type === TEMPLATE_3) {
        const tmp_template: Template_3_T = {
          ...(template as Template_3),
          viewable: true,
        };
        charging.push(tmp_template);
      }
    });

    electrified.benefits.forEach((template) => {
      if (template.type === TEMPLATE_1) {
        const tmp_template: Template_1_T = {
          ...(template as Template_1),
          translation_status: false,
          viewable: true,
        };
        benefits.push(tmp_template);
      } else if (template.type === TEMPLATE_2) {
        const tmp_template: Template_2_T = {
          ...(template as Template_2),
          translation_status: false,
          viewable: true,
        };
        benefits.push(tmp_template);
      } else if (template.type === TEMPLATE_3) {
        const tmp_template: Template_3_T = {
          ...(template as Template_3),
          viewable: true,
        };
        benefits.push(tmp_template);
      }
    });

    const {
      electrified_item_name,
      asset_version,
      electrified_subtitle,
      main_image,
      rotation_image,
      calculation_image,
      calculation_formula,
    } = electrified;

    const electrified_t_item: Electrified_T_Item = {
      electrified_item_name,
      asset_version,
      electrified_subtitle,
      main_image,
      rotation_image,
      calculation_image,
      calculation_formula,
      main,
      highlights,
      charging,
      benefits,
    };

    electrifies.push(electrified_t_item);
  });

  const electrified_T: Electrified_T = {
    language,
    electrifies,
  };

  return electrified_T;
};

// todo: description 작성 //
export const initializePowertrainTranslation = (
  language: LANGUAGE_CODE,
  original_powertrain: PowertrainAll,
) => {
  const mild_hybrid = new Array<
    Template_1_T | TemplatePowertrain_T | TemplateLottie_T
  >();
  const hydrogen = new Array<
    Template_1_T | TemplatePowertrain_T | TemplateLottie_T
  >();
  const full_electric = new Array<
    Template_1_T | TemplatePowertrain_T | TemplateLottie_T
  >();
  const plug_in_hybrid = new Array<
    Template_1_T | TemplatePowertrain_T | TemplateLottie_T
  >();
  const hybrid = new Array<
    Template_1_T | TemplatePowertrain_T | TemplateLottie_T
  >();

  // description:  //
  original_powertrain.mild_hybrid.forEach((template) =>
    powertrainConversion(template, mild_hybrid),
  );

  // description:  //
  original_powertrain.hydrogen.forEach((template) =>
    powertrainConversion(template, hydrogen),
  );

  // description:  //
  original_powertrain.full_electric.forEach((template) =>
    powertrainConversion(template, full_electric),
  );

  // description:  //
  original_powertrain.plug_in_hybrid.forEach((template) =>
    powertrainConversion(template, plug_in_hybrid),
  );

  // description:  //
  original_powertrain.hybrid.forEach((template) =>
    powertrainConversion(template, hybrid),
  );

  const powertrain_T: Powertrain_T = {
    language,
    mild_hybrid,
    hydrogen,
    full_electric,
    plug_in_hybrid,
    hybrid,
  };

  return powertrain_T;
};

// todo: description 작성 //
export const initializeConnectivityTranslation = (
  language: LANGUAGE_CODE,
  original_connectivity: ConnectivityAll,
) => {
  const bluelink = new Array<
    | TemplateConnectivity_T
    | TemplateConnectivitySub_T
    | TemplateConnectivitySub_2_T
  >();

  const charge_myHyundai = new Array<
    | TemplateConnectivity_T
    | TemplateConnectivitySub_T
    | TemplateConnectivitySub_2_T
  >();

  original_connectivity.bluelink.forEach((template) =>
    connectivityConversion(template, bluelink),
  );

  original_connectivity.charge_myHyundai.forEach((template) =>
    connectivityConversion(template, charge_myHyundai),
  );

  const connectivity_T: Connectivity_T = {
    language,
    bluelink,
    charge_myHyundai,
  };

  return connectivity_T;
};

// todo: description 작성 //
const powertrainConversion = (
  template: Template_1 | TemplatePowertrain | TemplateLottie,
  arr: Array<Template_1 | TemplatePowertrain | TemplateLottie>,
) => {
  if (template.type === TEMPLATE_1) {
    const tmp_template: Template_1_T = {
      translation_status: false,
      viewable: true,
      ...(template as Template_1_T),
    };
    arr.push(tmp_template);
  } else if (template.type === TEMPLATE_POWERTRAIN) {
    const tmp_template: TemplatePowertrain_T = {
      translation_status: false,
      viewable: true,
      ...(template as TemplatePowertrain_T),
    };
    arr.push(tmp_template);
  } else if (template.type === TEMPLATE_LOTTIE) {
    const tmp_template: TemplateLottie_T = {
      translation_status: false,
      viewable: true,
      ...(template as TemplateLottie_T),
    };
    arr.push(tmp_template);
  }
};

// todo: description 작성 //
const connectivityConversion = (
  template:
    | TemplateConnectivity
    | TemplateConnectivitySub
    | TemplateConnectivitySub_2,
  arr: Array<
    TemplateConnectivity | TemplateConnectivitySub | TemplateConnectivitySub_2
  >,
) => {
  if (template.type === TEMPLATE_CONNECTIVITY) {
    const tmp_template: TemplateConnectivity_T = {
      translation_status: false,
      viewable: true,
      ...(template as TemplateConnectivity_T),
    };
    arr.push(tmp_template);
  } else if (template.type === TEMPLATE_CONNECTIVITY_SUB) {
    const tmp_template: TemplateConnectivitySub_T = {
      translation_status: false,
      viewable: true,
      ...(template as TemplateConnectivitySub_T),
    };
    arr.push(tmp_template);
  } else if (template.type === TEMPLATE_CONNECTIVITY_SUB2) {
    const tmp_template: TemplateConnectivitySub_2_T = {
      translation_status: false,
      viewable: true,
      ...(template as TemplateConnectivitySub_2_T),
    };
    arr.push(tmp_template);
  }
};

// todo: description 작성 //
// description: 빈 객체인지 체크하는 함수
export const isEmptyObj = (obj: any) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
};
