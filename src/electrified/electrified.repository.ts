import { ELECTRIFIED } from '@common/constants';
import { COUNTRY_CODE } from '@common/enums';
import { Asset, AssetDocument } from '@common/schemas/Asset.schema';
import {
  ElectrifiedAll,
  ElectrifiedAllDocument,
} from '@common/schemas/ElectrifiedAll.schema';
import {
  ElectrifiedTranslation,
  ElectrifiedTranslationDocument,
} from '@common/schemas/ElectrifiedTranslation.schema';
import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ElectrifiedResitory {
  // description: admin controller logger
  private logger = new Logger('ElectrifiedResitory');

  // description: repository //
  constructor(
    @InjectModel(ElectrifiedAll.name)
    private electrifiedAllModel: Model<ElectrifiedAllDocument>,
    @InjectModel(ElectrifiedTranslation.name)
    private electrifiedTranslationModel: Model<ElectrifiedTranslationDocument>,
    @InjectModel(Asset.name)
    private assetModel: Model<AssetDocument>,
  ) {}

  // description: //
  async electrifiedInitialize(country_code: COUNTRY_CODE) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedResitory - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );
    try {
      // description: //
      return await this.electrifiedTranslationModel
        .findOne({
          country: country_code,
        })
        .exec();
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 ElectrifiedResitory - electrifiedInitialize 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description: //
  async getAssets(
    electrified_names: Array<{
      asset_name: string;
      asset_version: number;
    }>,
  ) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedResitory - getAssets  ⚙️⚙️⚙️⚙️⚙️',
    );
    try {
      // todo: 분명 다른 방법이 있을 것인데..
      // description: //
      const result = [];
      for (const asset of electrified_names) {
        result.push(
          await this.assetModel
            .findOne({
              app_type: ELECTRIFIED,
              asset_name: asset.asset_name,
              asset_version: asset.asset_version,
            })
            .exec(),
        );
      }
      return result;
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 ElectrifiedResitory - getAssets 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description: //
  async getTranslationElectrified(country_code: COUNTRY_CODE) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedResitory - getAssets  ⚙️⚙️⚙️⚙️⚙️',
    );
    try {
      return await this.electrifiedTranslationModel
        .findOne({ country: country_code })
        .exec();
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 ElectrifiedResitory - getTranslationElectrified 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }
}
