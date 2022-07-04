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

  // description: Web - Admin 로그인
  async loginAdmin(dto: AuthDealerDTO): Promise<AuthResult> {
    const { id, password } = dto;

    this.logger.verbose('⚙️⚙️⚙️⚙️⚙️ AuthService - loginAdmin  ⚙️⚙️⚙️⚙️⚙️');

    let result;

    // description: dealer portal login try
    try {
      this.logger.log('⚙️⚙️⚙️⚙️⚙️ Request GET Dealer Portal Token  ⚙️⚙️⚙️⚙️⚙️');
      const token = await this.httpService.axiosRef.get(GET_TOKEN_URL);

      this.logger.debug(`token: ${token.data.tokenValue}`);

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
      this.logger.error(`😵😵😵😵😵 AdminRepository - checkData 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new UnauthorizedException('No Authorization');
    }

    // description: 데이터베이스 Dealer에서 dealer_code를 조건으로 검색
    // const dealer = await this.authRepository.getDealer(id);

    // description: 검색 결과가 존재한다면 req password와 db password 비교
    // if (dealer !== null) {
    // description: access_token 생성
    const dealer_code = result.data.dealerCode;
    const country = getCountryCodeFromDealerData(result.data);
    const dealership = result.data.dealerCode;
    // description: access_token에 담을 값
    const payload = { id, dealer_code, country, dealership };
    // description: jwt 생성
    const access_token = this.jwtService.sign(payload);
    // description: 반환
    const auth_result: AuthResult = {
      access_token,
      expired_time: jwtConfig.expiresIn,
      dealer_name: result.data.dealerName,
      name: result.data.name,
      country,
    };
    return auth_result;
    // }
    // description: 로그인 정보가 일치하지 않으면 http status 401 - Unauthorized 반환
    // else throw new UnauthorizedException('Login Information Mismatch.');
  }
}
