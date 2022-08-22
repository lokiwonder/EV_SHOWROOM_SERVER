import { EditTransitionDTO } from '@admin/dto/edit-transition.dto';
import { DisplayTransitionItemDTO } from '@admin/dto/display-transition-item.dto';
import { DisplayTransitionDTO } from '@admin/dto/display-transition.dto';
import { APP_TYPE, COUNTRY_CODE } from '@common/enums';
import {
  BENEFITS,
  BLUELINK,
  CHARGE_MYHYUNDAI,
  CHARGING,
  FULL_ELLECTRIC,
  HIGHLIGHTS,
  HYBRID,
  HYDROGEN,
  MILD_HYBRID,
  PLUG_IN_HYBRID,
} from '@common/constants';
import {
  ConnectivityAll,
  ConnectivityAllDocument,
} from '@common/schemas/ConnectivityAll.schema';
import {
  ConnectivityTranslation,
  ConnectivityTranslationDocument,
} from '@common/schemas/ConnectivityTranslation.schema';
import { Dealer, DealerDocument } from '@common/schemas/Dealer.schema';
import {
  ElectrifiedAll,
  ElectrifiedAllDocument,
} from '@common/schemas/ElectrifiedAll.schema';
import {
  ElectrifiedTranslation,
  ElectrifiedTranslationDocument,
} from '@common/schemas/ElectrifiedTranslation.schema';
import {
  PowertrainAll,
  PowertrainAllDocument,
} from '@common/schemas/PowertrainAll.schema';
import {
  PowertrainTranslation,
  PowertrainTranslationDocument,
} from '@common/schemas/PowertrainTranslation.schema';
import {
  TranslationLog,
  TranslationLogDocument,
} from '@common/schemas/TranslationLog.schema';

import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  getConnectivityGroup,
  getPowertrainGroup,
  initializeConnectivity,
  initializeConnectivityTranslationLanguage,
  initializeElectirifeid,
  initializeElectrifedTranslationLanguage,
  initializePowertrain,
  initializePowertrainTranslationLanguage,
  setEditConnectivityTemplates,
  setEditElectrifiedTemplates,
  setEditPowertrainTemplates,
} from '@common/functions/admin-repository.function';
import { SettingSetupDTO } from '@admin/dto/setting-setup.dto';

@Injectable()
export class AdminRepository {
  // description: admin controller logger
  private logger = new Logger('AdminRepository');

  constructor(
    @InjectModel(ElectrifiedAll.name)
    private electrifiedAllModel: Model<ElectrifiedAllDocument>,

    @InjectModel(PowertrainAll.name)
    private powertrainAllModel: Model<PowertrainAllDocument>,

    @InjectModel(ConnectivityAll.name)
    private connectivityAllModel: Model<ConnectivityAllDocument>,

    @InjectModel(ElectrifiedTranslation.name)
    private electrifiedTranslationModel: Model<ElectrifiedTranslationDocument>,

    @InjectModel(PowertrainTranslation.name)
    private powertrainTranslationModel: Model<PowertrainTranslationDocument>,

    @InjectModel(ConnectivityTranslation.name)
    private connectivityTranslationModel: Model<ConnectivityTranslationDocument>,

    @InjectModel(Dealer.name)
    private dealerModel: Model<DealerDocument>,

    @InjectModel(TranslationLog.name)
    private translationLogModel: Model<TranslationLogDocument>,
  ) {}

  // todo: 분해
  // description:
  async checkData(country: COUNTRY_CODE) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - checkData 🗄🗄🗄🗄🗄');
    try {
      // description:
      const electrifiedTranslation = await this.electrifiedTranslationModel
        .findOne({ country })
        .exec();
      const powertrainTranslation = await this.powertrainTranslationModel
        .findOne({ country })
        .exec();
      const connectivityTranslation = await this.connectivityTranslationModel
        .findOne({ country })
        .exec();

      // description: ElectrifiedTranslation 데이터가 존재하지 않는다면
      if (electrifiedTranslation === null) {
        const origianl_electrified = await this.electrifiedAllModel
          .find()
          .exec();

        const electrified_translation = initializeElectirifeid(
          origianl_electrified,
          country,
        );

        await this.electrifiedTranslationModel.create(electrified_translation);
      }

      // description: PowertrainTranslation 데이터가 존재하지 않는다면
      if (powertrainTranslation === null) {
        const original_powertrain = await this.powertrainAllModel
          .findOne()
          .exec();

        const powertrain_translation = initializePowertrain(
          original_powertrain,
          country,
        );

        await this.powertrainTranslationModel.create(powertrain_translation);
      }

      // description: ConnectivityTranslation 데이터가 존재하지 않는다면
      if (connectivityTranslation === null) {
        const original_connectivity = await this.connectivityAllModel
          .findOne()
          .exec();

        const connectivity_translation = initializeConnectivity(
          original_connectivity,
          country,
        );

        await this.connectivityTranslationModel.create(
          connectivity_translation,
        );
      }
    } catch (e) {
      this.logger.error(`😵😵😵😵😵 AdminRepository - checkData 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getElectrifies(): Promise<Array<ElectrifiedAll>> {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getElectrifiedNames 🗄🗄🗄🗄🗄');
    try {
      return await this.electrifiedAllModel.find().exec();
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getElectrifiedNames 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getElectrifiedNames(): Promise<Array<string>> {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getElectrifiedNames 🗄🗄🗄🗄🗄');
    try {
      const all_electrified_names = new Array<string>();
      const all_electrified = await this.electrifiedAllModel.find().exec();
      // description: 검색 결과를 all_electrified_names 에 push
      all_electrified.forEach((item) =>
        all_electrified_names.push(item.electrified_item_name),
      );

      return all_electrified_names;
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getElectrifiedNames 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getViewableElectrifies(country: COUNTRY_CODE) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getElectrifiedNames 🗄🗄🗄🗄🗄');
    // description:
    try {
      const translation_electrified = await this.electrifiedTranslationModel
        .findOne({ country })
        .exec();

      const { displayable_electrifies, electrified_version } =
        translation_electrified;

      return { displayable_electrifies, electrified_version };
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getViewableElectrifies 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async settingViewableElectrifies(
    country: COUNTRY_CODE,
    dto: SettingSetupDTO,
  ) {
    this.logger.verbose(
      '🗄🗄🗄🗄🗄 AdminRepository - settingViewableElectrifies 🗄🗄🗄🗄🗄',
    );
    // description:
    try {
      const { displayable_electrifies, electrified_version } = dto;
      const version =
        Math.round((electrified_version + 0.01 + Number.EPSILON) * 100) / 100;
      await this.electrifiedTranslationModel
        .updateOne(
          { country },
          {
            displayable_electrifies,
            electrified_version: version,
          },
        )
        .exec();

      return {
        displayable_electrifies,
        electrified_version: version,
      };
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - settingViewableElectrifies 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getTranslation(country: COUNTRY_CODE) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getTranslationGroup 🗄🗄🗄🗄🗄');

    try {
      return await this.electrifiedTranslationModel
        .findOne({
          country,
        })
        .exec();
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getTranslationGroup 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // todo: 분해
  // description:
  async getTranslationGroup(dto: DisplayTransitionDTO) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getTranslationGroup 🗄🗄🗄🗄🗄');

    try {
      const { app_type, group, language, country } = dto;

      this.logger.debug(app_type, group, language, country);

      // description: app_type이 'electrified' 일 때
      if (app_type === APP_TYPE.ELECTRIFIED) {
        let electrified_T = await this.electrifiedTranslationModel
          .findOne({
            country,
          })
          .exec();

        // description: 검색 결과에서 language와 group
        let translation = electrified_T.translations.find(
          (translation) => translation.language === language,
        );

        if (!translation) {
          // description: return을 하지 않았을 시 (일치하는 language 없음)
          // description: 원본 데이터 가져오기
          const original_electrifies = await this.electrifiedAllModel
            .find()
            .exec();

          // description: 해당 언어로 initialize
          const { translations, languages } =
            initializeElectrifedTranslationLanguage(
              electrified_T,
              original_electrifies,
              language,
            );

          // description: 수정
          await this.electrifiedTranslationModel.updateMany(
            { country },
            { languages, translations },
          );
          electrified_T = await this.electrifiedTranslationModel
            .findOne({
              country,
            })
            .exec();

          translation = electrified_T.translations.find(
            (translation) => translation.language === language,
          );
        }

        for (const electrified of translation.electrifies)
          if (electrified.electrified_item_name === group) return electrified;
      }

      // description: app_type이 'powertrain' 일 때
      else if (app_type === APP_TYPE.POWERTRAIN) {
        let powertrain_T = await this.powertrainTranslationModel
          .findOne({
            country,
          })
          .exec();

        let translation = powertrain_T.translations.find(
          (translation) => translation.language === language,
        );

        if (!translation) {
          const original_powertrain = await this.powertrainAllModel
            .findOne()
            .exec();

          // description:
          const { languages, translations } =
            initializePowertrainTranslationLanguage(
              powertrain_T,
              original_powertrain,
              language,
            );

          // description: 수정
          await this.powertrainTranslationModel.updateOne(
            { country },
            { languages, translations },
          );

          powertrain_T = await this.powertrainTranslationModel
            .findOne({
              country,
            })
            .exec();

          translation = powertrain_T.translations.find(
            (translation) => translation.language === language,
          );
        }

        const result = getPowertrainGroup(translation, group);
        if (result !== null) return result;
        else throw new BadRequestException('');

        // description: return을 하지 않았을 시 (일치하는 language 없음)
        // description: 원본 데이터 가져오기
      }

      // description: app_type이 'electrified' 일 때
      else if (app_type === APP_TYPE.CONNECTIVITY) {
        let connectivity_T = await this.connectivityTranslationModel
          .findOne({
            country,
          })
          .exec();

        let translation = connectivity_T.translations.find(
          (translation) => translation.language === language,
        );

        if (!translation) {
          // description: return을 하지 않았을 시 (일치하는 language 없음)
          // description: 원본 데이터 가져오기
          const original_connectivity = await this.connectivityAllModel
            .findOne()
            .exec();

          // description: 해당 언어로 initialize
          const { languages, translations } =
            initializeConnectivityTranslationLanguage(
              connectivity_T,
              original_connectivity,
              language,
            );

          // description: 수정
          await this.connectivityTranslationModel.updateOne(
            { country },
            { languages, translations },
          );

          connectivity_T = await this.connectivityTranslationModel
            .findOne({
              country,
            })
            .exec();

          translation = connectivity_T.translations.find(
            (translation) => translation.language === language,
          );
        }

        const result = getConnectivityGroup(connectivity_T, group);
        if (result !== null) return result;
      }

      // description: app_type이 잘못됐을 때
      else
        throw new BadRequestException('The application type value is invalid.');
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getTranslationGroup 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);
      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getOriginalItem(dto: DisplayTransitionItemDTO) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getOriginalItem 🗄🗄🗄🗄🗄');

    try {
      const { app_type, group, item_group, sequence_number } = dto;
      if (app_type === APP_TYPE.ELECTRIFIED) {
        // group 이 차량 , item_group 이 하이라이트 이런거
        const electrified = await this.electrifiedAllModel
          .findOne({
            electrified_item_name: group,
          })
          .exec();
        // ? 함수로 뺄 수 있을까?
        if (item_group === HIGHLIGHTS)
          return electrified.highlights.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (item_group === CHARGING)
          return electrified.charging.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (item_group === BENEFITS)
          return electrified.benefits.find(
            (item) => item.sequence_number === sequence_number,
          );
        else new BadRequestException(`Invalid group.`);
      } else if (app_type === APP_TYPE.POWERTRAIN) {
        const powertrain = await this.powertrainAllModel.findOne({}).exec();
        // ? : 함수로 뺄 수 있을까?
        if (group === MILD_HYBRID)
          return powertrain.mild_hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === HYDROGEN)
          return powertrain.hydrogen.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === FULL_ELLECTRIC)
          return powertrain.full_electric.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === PLUG_IN_HYBRID)
          return powertrain.plug_in_hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === HYBRID)
          return powertrain.hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else throw new BadRequestException(`Invalid group.`);
      } else if (app_type === APP_TYPE.CONNECTIVITY) {
        const connectivity = await this.connectivityAllModel.findOne({}).exec();
        // ? : 함수로 뺄 수 있을까?
        if (group === BLUELINK)
          return connectivity.bluelink.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === CHARGE_MYHYUNDAI)
          return connectivity.charge_myHyundai.find(
            (item) => item.sequence_number === sequence_number,
          );
      }
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getOriginalItem 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async getTranslationItem(dto: DisplayTransitionItemDTO) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - getTranslationItem 🗄🗄🗄🗄🗄');
    try {
      const {
        country,
        app_type,
        group,
        language,
        item_group,
        sequence_number,
      } = dto;

      this.logger.debug(`country: ${country}`);
      this.logger.debug(`app_type: ${app_type}`);
      this.logger.debug(`group: ${group}`);
      this.logger.debug(`language: ${language}`);
      this.logger.debug(`item_group: ${item_group}`);
      this.logger.debug(`sequence_number: ${sequence_number}`);

      // ? 분해???
      // description:
      if (app_type === APP_TYPE.ELECTRIFIED) {
        const electrified_T = await this.electrifiedTranslationModel
          .findOne({ country })
          .exec();

        console.log(electrified_T);
        const translation = electrified_T.translations.find(
          (item) => item.language === language,
        );
        console.log(translation);
        const electrified = translation.electrifies.find(
          (item) => item.electrified_item_name === group,
        );

        if (item_group === HIGHLIGHTS)
          return electrified.highlights.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (item_group === CHARGING)
          return electrified.charging.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (item_group === BENEFITS)
          return electrified.benefits.find(
            (item) => item.sequence_number === sequence_number,
          );
        else throw new BadRequestException(`Invalid group.`);
      }
      // description:
      else if (app_type === APP_TYPE.POWERTRAIN) {
        const powertrain_T = await this.powertrainTranslationModel
          .findOne({ country })
          .exec();

        const powertrain = powertrain_T.translations.find(
          (item) => item.language === language,
        );

        if (group === MILD_HYBRID)
          return powertrain.mild_hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === HYDROGEN)
          return powertrain.hydrogen.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === FULL_ELLECTRIC)
          return powertrain.full_electric.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === PLUG_IN_HYBRID)
          return powertrain.plug_in_hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === HYBRID)
          return powertrain.hybrid.find(
            (item) => item.sequence_number === sequence_number,
          );
        else throw new BadRequestException(`Invalid group.`);
      }
      // description:
      else if (app_type === APP_TYPE.CONNECTIVITY) {
        const connectivity_T = await this.connectivityTranslationModel
          .findOne({ country })
          .exec();

        const connectivity = connectivity_T.translations.find(
          (item) => item.language === language,
        );

        if (group === BLUELINK)
          return connectivity.bluelink.find(
            (item) => item.sequence_number === sequence_number,
          );
        else if (group === CHARGE_MYHYUNDAI)
          return connectivity.charge_myHyundai.find(
            (item) => item.sequence_number === sequence_number,
          );
        else throw new BadRequestException(`Invalid group.`);
      }
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - getTranslationItem 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // todo: 분해
  // description:
  async editTranslation(dto: EditTransitionDTO) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - editTranslation 🗄🗄🗄🗄🗄');
    try {
      const { app_type, country } = dto;

      // description:
      if (app_type === APP_TYPE.ELECTRIFIED) {
        const before_data = await this.electrifiedTranslationModel.findOne({
          country,
        });
        setEditElectrifiedTemplates(dto, before_data);

        const version =
          Math.round(
            (before_data.translation_version + 0.001 + Number.EPSILON) * 1000,
          ) / 1000;

        await this.electrifiedTranslationModel.updateOne(
          { country },
          {
            translation_version: version,
            translations: before_data.translations,
          },
        );
      }
      // description:
      else if (app_type === APP_TYPE.POWERTRAIN) {
        const before_data = await this.powertrainTranslationModel.findOne({
          country,
        });

        setEditPowertrainTemplates(dto, before_data);

        const version =
          Math.round(
            (before_data.translation_version + 0.001 + Number.EPSILON) * 1000,
          ) / 1000;

        await this.powertrainTranslationModel.updateOne(
          { country },
          {
            translation_version: version,
            translations: before_data.translations,
          },
        );
      }
      // description:
      else if (app_type === APP_TYPE.CONNECTIVITY) {
        const before_data = await this.connectivityTranslationModel.findOne({
          country,
        });

        setEditConnectivityTemplates(dto, before_data);

        const version =
          Math.round(
            (before_data.translation_version + 0.001 + Number.EPSILON) * 1000,
          ) / 1000;

        await this.connectivityTranslationModel.updateOne(
          { country },
          {
            translation_version: version,
            translations: before_data.translations,
          },
        );
      }
      // description:
      else {
      }
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - editTranslation 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }

  // description:
  async loggingTranslation(dealer_code: string, dto: EditTransitionDTO) {
    this.logger.verbose('🗄🗄🗄🗄🗄 AdminRepository - loggingTranslation 🗄🗄🗄🗄🗄');
    try {
    } catch (e) {
      this.logger.error(
        `😵😵😵😵😵 AdminRepository - loggingTranslation 😵😵😵😵😵`,
      );
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('Database Error');
    }
  }
}
