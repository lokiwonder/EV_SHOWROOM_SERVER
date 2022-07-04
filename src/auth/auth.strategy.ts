import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import * as config from 'config';

const jwtConfig = config.get('jwt');

// description: Admin AuthGuard
@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // description: jwt 복호화 할 secret key
      secretOrKey: jwtConfig.secret,
      // description: bearer token 검증
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any) {
    const { id, dealer_code, country, dealership } = payload;
    return { id, dealer_code, country, dealership };
  }
}
