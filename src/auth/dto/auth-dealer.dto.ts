import { IsNotEmpty } from 'class-validator';

export default class AuthDealerDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  password: string;
}
