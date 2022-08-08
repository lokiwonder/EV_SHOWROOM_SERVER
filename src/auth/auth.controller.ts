import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthDealerDTO } from '@auth/dto';
import { AuthService } from '@auth/auth.service';
import AuthResult from '@common/types/AuthResult.type';
import { AUTH_API, LOGIN_API } from '@common/constants';

@Controller(AUTH_API)
export class AuthController {
  // description: auth controller logger
  private logger = new Logger('AuthController');

  constructor(private authService: AuthService) {}

  // description: Web - Admin 로그인
  @Post(LOGIN_API)
  // description: pipe에서 dealer_code, password type 확인 //
  @UsePipes(ValidationPipe)
  async loginAdmin(@Body() dto: AuthDealerDTO): Promise<AuthResult> {
    this.logger.verbose('🔛 Access apis/auth/loginAdmin');
    return this.authService.loginAdmin(dto);
  }
}
