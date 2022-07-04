import { Dealer, DealerDocument } from '@common/schemas/Dealer.schema';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Dealer.name)
    private dealerModel: Model<DealerDocument>,
  ) {}

  // description: login을 위한 password 검색
  getDealer = async (dealer_code: string) => {
    try {
      // description: Dealer에서 dealer_code를 조건으로 검색
      return await this.dealerModel.findOne({ dealer_code }).exec();
    } catch (e) {
      // description: 데이터베이스 오류 시 Http status 503 - Service Unavailble 반환
      throw new ServiceUnavailableException('Database Error');
    }
  };
}
