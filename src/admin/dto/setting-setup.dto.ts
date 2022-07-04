import { IsNotEmpty, IsNumber } from 'class-validator';

export class SettingSetupDTO {
  @IsNotEmpty()
  displayable_electrifies: Array<string>;
  @IsNotEmpty()
  @IsNumber()
  electrified_version: number;
}
