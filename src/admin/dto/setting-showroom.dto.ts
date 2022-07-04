import { IsNotEmpty, IsArray } from 'class-validator';

export class SettingShowroomDTO {
  @IsNotEmpty()
  @IsArray()
  displayable_electrifies: Array<string>;
}
