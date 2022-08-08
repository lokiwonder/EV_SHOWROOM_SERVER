import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthDealerDTO } from '@auth/dto';
import { AuthRepository } from '@auth/auth.repository';
import AuthResult from '@common/types/AuthResult.type';

import * as config from 'config';
import { HttpService } from '@nestjs/axios';
import { GET_TOKEN_URL, DEALER_PORTAL } from '@common/constants';
import { getCountryCodeFromDealerData } from '@common/functions/country-code.function';

const jwtConfig = config.get('jwt');

@Injectable()
export class AuthService {
  // description: Auth Logger 생성
  private logger = new Logger('AuthService');
  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {}

  // ! 변경 사항 적용 후 삭제 예정 ! //
  // description: 로그인 //
  async loginAdmin(dto: AuthDealerDTO): Promise<AuthResult> {
    const { id, password } = dto;

    this.logger.verbose('⚙️ AuthService - loginAdmin');

    let result;

    // description: dealer portal login try //
    try {
      const token = await this.httpService.axiosRef.get(GET_TOKEN_URL);

      const data = {
        tokenValue: token.data.tokenValue,
        userID: id,
        password,
      };

      this.logger.log('⚙️⚙️⚙️⚙️⚙️ Request Dealer Portal Login  ⚙️⚙️⚙️⚙️⚙️');
      result = await this.httpService.axiosRef.post(DEALER_PORTAL, data);

      console.log(result.data);
      this.logger.debug(`token: ${result.data.result}`);
    } catch (e) {
      this.logger.error(`😵😵😵😵😵 AuthService - loginAdmin 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new UnauthorizedException('No Authorization');
    }

    // description: 로그인 정보가 일치하지 않으면 http status 401 - Unauthorized 반환 //
    if (result.data.result === 'E')
      throw new UnauthorizedException('No Authorization');

    // description: access_token 생성 //
    const dealer_code = result.data.dealerCode;
    const country = getCountryCodeFromDealerData(result.data);
    const dealership = result.data.dealerCode;
    // description: access_token에 담을 값 //
    const payload = { id, dealer_code, country, dealership };
    // description: jwt 생성 //
    const access_token = this.jwtService.sign(payload);
    // description: 반환 //
    const auth_result: AuthResult = {
      access_token,
      expired_time: jwtConfig.expiresIn,
      dealer_name: result.data.dealerName,
      name: result.data.name,
      country,
    };
    return auth_result;
  }
  // ! 변경 사항 적용 후 삭제 예정 ! //

  // description: 통합 로그인 //
  //   async integratedLogin(dto: IntegratedLoginDTO) {
  //     const { id, password } = dto;
  //     // todo : ID 패턴 확인 (딜러인지, 법인인지, 기타사용자인지) //

  //     // todo : 패턴에 따라  //
  //   }
}
