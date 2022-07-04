import { COUNTRY_CODE, DEALER_COUNTRY } from '@common/enums';

export const getCountryCodeFromDealerData = (data) => {
  const mapping_data = data.dealerCode.substr(0, 5);

  if (mapping_data === DEALER_COUNTRY.AUSTRIA) return COUNTRY_CODE.AUSTRIA;
  if (mapping_data === DEALER_COUNTRY.BELGIUM) return COUNTRY_CODE.BELGIUM;
  if (mapping_data === DEALER_COUNTRY.DENMARK) return COUNTRY_CODE.DENMARK;
  if (mapping_data === DEALER_COUNTRY.FINLAND) return COUNTRY_CODE.FINLAND;
  if (mapping_data === DEALER_COUNTRY.FRANCE) return COUNTRY_CODE.FRANCE;
  if (mapping_data === DEALER_COUNTRY.GERMANY) return COUNTRY_CODE.GERMANY;
  if (mapping_data === DEALER_COUNTRY.ICELAND) return COUNTRY_CODE.ICELAND;
  if (mapping_data === DEALER_COUNTRY.ITALY) return COUNTRY_CODE.ITALY;
  if (mapping_data === DEALER_COUNTRY.MALTA) return COUNTRY_CODE.MALTA;
  if (mapping_data === DEALER_COUNTRY.NETHERRANDS1)
    return COUNTRY_CODE.NETHERRANDS;
  if (mapping_data === DEALER_COUNTRY.NETHERRANDS2)
    return COUNTRY_CODE.NETHERRANDS;
  if (mapping_data === DEALER_COUNTRY.NORWAY) return COUNTRY_CODE.NORWAY;
  if (mapping_data === DEALER_COUNTRY.PORTUGAL) return COUNTRY_CODE.PORTUGAL;
  if (mapping_data === DEALER_COUNTRY.SPAIN) return COUNTRY_CODE.SPAIN;
  if (mapping_data === DEALER_COUNTRY.SWEDEN) return COUNTRY_CODE.SWEDEN;
  if (mapping_data === DEALER_COUNTRY.SWISS) return COUNTRY_CODE.SWISS;
  if (mapping_data === DEALER_COUNTRY.UK) return COUNTRY_CODE.UK;
  if (mapping_data === DEALER_COUNTRY.BULGARIA) return COUNTRY_CODE.BULGARIA;
  if (mapping_data === DEALER_COUNTRY.CZECH) return COUNTRY_CODE.CZECH;
  if (mapping_data === DEALER_COUNTRY.HUNGARY) return COUNTRY_CODE.HUNGARY;
  if (mapping_data === DEALER_COUNTRY.POLAND) return COUNTRY_CODE.POLAND;
  if (mapping_data === DEALER_COUNTRY.ROMANIA) return COUNTRY_CODE.ROMANIA;
  if (mapping_data === DEALER_COUNTRY.SLOVENIA) return COUNTRY_CODE.SLOVENIA;
  if (mapping_data === DEALER_COUNTRY.CROATIA1) return COUNTRY_CODE.CROATIA;
  if (mapping_data === DEALER_COUNTRY.CROATIA2) return COUNTRY_CODE.CROATIA;
  if (mapping_data === DEALER_COUNTRY.SLOVAKIA) return COUNTRY_CODE.SLOVAKIA;
  if (mapping_data === DEALER_COUNTRY.CYPRUS) return COUNTRY_CODE.CYPRUS;
  if (mapping_data === DEALER_COUNTRY.GREECE) return COUNTRY_CODE.GREECE;
  if (mapping_data === DEALER_COUNTRY.CANARY_ISLAND)
    return COUNTRY_CODE.CANARY_ISLAND;
  if (mapping_data === DEALER_COUNTRY.REUNION) return COUNTRY_CODE.REUNION;
  return null;
};
