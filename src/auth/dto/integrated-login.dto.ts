import { IsNotEmpty } from 'class-validator';

export default class IntegratedLoginDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  password: string;
}
