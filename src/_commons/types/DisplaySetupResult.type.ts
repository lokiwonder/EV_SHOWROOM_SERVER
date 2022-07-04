import ElectrifiedAll from './ElectrifiedAll.type';

type DisplaySetupResult = {
  all_electrifies: Array<ElectrifiedAll>;
  displayable_electrifies: Array<string>;
  electrified_version: number;
};

export default DisplaySetupResult;
