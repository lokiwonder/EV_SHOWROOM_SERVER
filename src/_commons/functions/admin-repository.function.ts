import {
  BENEFITS,
  BLUELINK,
  CHARGE_MYHYUNDAI,
  CHARGING,
  FULL_ELLECTRIC,
  HIGHLIGHTS,
  HYBRID,
  HYDROGEN,
  MILD_HYBRID,
  PLUG_IN_HYBRID,
  TEMPLATE_1,
  TEMPLATE_2,
  TEMPLATE_CONNECTIVITY,
  TEMPLATE_CONNECTIVITY_SUB,
  TEMPLATE_CONNECTIVITY_SUB2,
  TEMPLATE_LOTTIE,
  TEMPLATE_POWERTRAIN,
} from '@common/constants';
import { COUNTRY_CODE, LANGUAGE_CODE } from '@common/enums';
import ConnectivityTranslation, {
  TemplateConnectivitySub_T,
  TemplateConnectivitySub_2_T,
  TemplateConnectivity_T,
} from '@common/types/ConnectivityTranslation.type';
import ElectrifiedTranslation, {
  Template_1_T,
  Template_2_T,
} from '@common/types/ElectrifiedTranslation.type';
import PowertrainTranslation, {
  TemplateLottie_T,
  TemplatePowertrain_T,
} from '@common/types/PowertrainTranslation.type';
import {
  initializeConnectivityTranslation,
  initializeElectrifiedTranslation,
  initializePowertrainTranslation,
} from './';

// function          checkData          function //
// description:
export const initializeElectirifeid = (
  origianl_electrified,
  country: COUNTRY_CODE,
) => {
  const displayable_electrifies = new Array<string>();

  origianl_electrified.forEach((item) =>
    displayable_electrifies.push(item.electrified_item_name),
  );

  const translation = initializeElectrifiedTranslation(
    LANGUAGE_CODE.ENGLISH,
    origianl_electrified,
  );

  const electrified_translation: ElectrifiedTranslation = {
    country,
    languages: [LANGUAGE_CODE.ENGLISH],
    default_language: LANGUAGE_CODE.ENGLISH,
    electrified_version: 0.0,
    translation_version: 0.0,
    displayable_electrifies,
    translations: [translation],
  };

  return electrified_translation;
};

// description:
export const initializeElectrifedTranslationLanguage = (
  electrified_T,
  original_electrifies,
  language,
) => {
  const translations = electrified_T.translations;
  const init = initializeElectrifiedTranslation(language, original_electrifies);
  translations.push(init);

  // description: 사용 언어에 해당 언어 추가
  const languages = electrified_T.languages;
  languages.push(language);

  return { translations, languages };
};

// description:
export const initializePowertrain = (
  original_powertrain,
  country: COUNTRY_CODE,
) => {
  const translation = initializePowertrainTranslation(
    LANGUAGE_CODE.ENGLISH,
    original_powertrain,
  );

  const powertrain_translation: PowertrainTranslation = {
    country,
    languages: [LANGUAGE_CODE.ENGLISH],
    powertrain_version: original_powertrain.powertrain_version,
    translation_version: 0.0,
    default_language: LANGUAGE_CODE.ENGLISH,
    translations: [translation],
  };

  return powertrain_translation;
};

// description:
export const initializePowertrainTranslationLanguage = (
  powertrain_T,
  original_powertrain,
  language,
) => {
  // description: 해당 언어로 initialize
  const translations = powertrain_T.translations;
  const init = initializePowertrainTranslation(language, original_powertrain);
  translations.push(init);

  // description: 사용 언어에 해당 언어 추가
  const languages = powertrain_T.languages;
  languages.push(language);

  return { init, translations, languages };
};

// description:
export const initializeConnectivity = (
  original_connectivity,
  country: COUNTRY_CODE,
) => {
  const translation = initializeConnectivityTranslation(
    LANGUAGE_CODE.ENGLISH,
    original_connectivity,
  );

  const connectivity_translation: ConnectivityTranslation = {
    country,
    languages: [LANGUAGE_CODE.ENGLISH],
    default_language: LANGUAGE_CODE.ENGLISH,
    connectivity_version: original_connectivity.connectivity_version,
    translation_version: 0.0,
    translations: [translation],
  };

  return connectivity_translation;
};

// description:
export const initializeConnectivityTranslationLanguage = (
  connectivity_T,
  original_connectivity,
  language,
) => {
  const translations = connectivity_T.translations;
  const init = initializeConnectivityTranslation(
    language,
    original_connectivity,
  );
  translations.push(init);

  // description: 사용 언어에 해당 언어 추가
  const languages = connectivity_T.languages;
  languages.push(language);

  return { init, translations, languages };
};

// description:
export const getPowertrainGroup = (translation, group) => {
  // description: group이 mild_hybrid 일 경우
  if (group === MILD_HYBRID) return translation.mild_hybrid;
  // description: group이 hydrogen 일 경우
  else if (group === HYDROGEN) return translation.hydrogen;
  // description: group이 full_electric 일 경우
  else if (group === FULL_ELLECTRIC) return translation.full_electric;
  // description: group이 plug_in_hybrid 일 경우
  else if (group === PLUG_IN_HYBRID) return translation.plug_in_hybrid;
  // description: group이 hybrid 일 경우
  else if (group === HYBRID) return translation.hybrid;
  else return null;
};

export const getConnectivityGroup = (translation, group) => {
  if (group === BLUELINK) return translation.bluelink;
  // description: group이 charge myHyundai 일 경우
  else if (group === CHARGE_MYHYUNDAI) return translation.charge_myHyundai;
  else return null;
};

// function          editTranslation          function //
// description:
export const editTemplate = (template, translation_data) => {
  // description: template type이 Template 1 일 경우
  if (template.type === TEMPLATE_1) {
    (template as Template_1_T).title = translation_data.title;
    (template as Template_1_T).comment = translation_data.comment;
    (template as Template_1_T).description = translation_data.description;
    (template as Template_1_T).translation_status = true;
  }
  // description: template type이 Template 2 일 경우
  else if (template.type === TEMPLATE_2) {
    (template as Template_2_T).contents = translation_data;
    (template as Template_2_T).translation_status = true;
  }
  // description: template type이 Template Powertrain 일 경우
  else if (template.type === TEMPLATE_POWERTRAIN) {
    (template as TemplatePowertrain_T).title = translation_data.title;
    (template as TemplatePowertrain_T).comment = translation_data.comment;
    (template as TemplatePowertrain_T).description =
      translation_data.description;
    (template as TemplatePowertrain_T).translation_status = true;
  }
  // description: template type이 Template Lottie 일 경우
  else if (template.type === TEMPLATE_LOTTIE) {
    (template as TemplateLottie_T).title = translation_data.title;
    (template as TemplateLottie_T).comment = translation_data.comment;
    (template as TemplateLottie_T).description = translation_data.description;
    (template as TemplateLottie_T).translation_status = true;
  }
  // description: template type이 Template Connnectivity 일 경우
  else if (template.type === TEMPLATE_CONNECTIVITY) {
    (template as TemplateConnectivity_T).title = translation_data.title;
    (template as TemplateConnectivity_T).comment = translation_data.comment;
    (template as TemplateConnectivity_T).description =
      translation_data.description;
    (template as TemplateConnectivity_T).translation_status = true;
  }
  // description: template type이 Template Connectivity Sub 일 경우
  else if (template.type === TEMPLATE_CONNECTIVITY_SUB) {
    (template as TemplateConnectivitySub_T).title = translation_data.title;
    (template as TemplateConnectivitySub_T).comment = translation_data.comment;
    (template as TemplateConnectivitySub_T).description =
      translation_data.description;
    (template as TemplateConnectivitySub_T).translation_status = true;
  }
  // description: template type이 Template Connectivity Sub 2 일 경우
  else if (template.type === TEMPLATE_CONNECTIVITY_SUB2) {
    (template as TemplateConnectivitySub_2_T).contents =
      translation_data.contents;
    (template as TemplateConnectivitySub_2_T).translation_status = true;
  }
};

// function          editTranslation - Electrified          function //

// description:
export const setEditElectrifiedTemplates = (dto, before_data) => {
  const { group, language, item_group, sequence_number, translation_data } =
    dto;
  const electrified = getBeforeElectrified(
    before_data.translations,
    language,
    group,
  );

  if (item_group === HIGHLIGHTS) {
    const template = electrified.highlights.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  } else if (item_group === CHARGING) {
    const template = electrified.charging.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  } else if (item_group === BENEFITS) {
    const template = electrified.benefits.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
};

// description:
export const getBeforeElectrified = (translations, language, group) => {
  const translation = translations.find((item) => item.language === language);

  return translation.electrifies.find(
    (item) => item.electrified_item_name === group,
  );
};

// function          editTranslation - Powertrain          function //

// description:
export const setEditPowertrainTemplates = (dto, before_data) => {
  const { group, language, sequence_number, translation_data } = dto;
  const translation = before_data.tranlations.find(
    (item) => item.language === language,
  );

  // description:
  if (group === MILD_HYBRID) {
    const template = translation.mild_hybrid.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
  // description:
  else if (group === HYDROGEN) {
    const template = translation.hydrogen.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
  // description:
  else if (group === FULL_ELLECTRIC) {
    const template = translation.full_electric.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
  // description:
  else if (group === PLUG_IN_HYBRID) {
    const template = translation.plug_in_hybrid.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
  // description:
  else if (group === HYBRID) {
    const template = translation.hybrid.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
};

// function          editTranslation - Connectivity          function //

// description:
export const setEditConnectivityTemplates = (dto, before_data) => {
  const { group, language, sequence_number, translation_data } = dto;
  const translation = before_data.tranlations.find(
    (item) => item.language === language,
  );

  // description:
  if (group === BLUELINK) {
    const template = translation.mild_hybrid.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
  // description:
  else if (group === CHARGE_MYHYUNDAI) {
    const template = translation.hydrogen.find(
      (item) => item.sequence_number === sequence_number,
    );

    editTemplate(template, translation_data);
  }
};
