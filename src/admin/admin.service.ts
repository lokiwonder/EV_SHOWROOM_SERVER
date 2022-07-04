import { EditTransitionDTO } from '@admin/dto/edit-transition.dto';
import { DisplayTransitionItemDTO } from '@admin/dto/display-transition-item.dto';
import { DisplayTransitionDTO } from '@admin/dto/display-transition.dto';
import { AdminRepository } from '@admin/admin.repository';
import AuthJwt from '@common/types/AuthJwt.type';
import { Injectable, Logger } from '@nestjs/common';
import DisplaySetupResult from '@common/types/DisplaySetupResult.type';
import { SettingSetupDTO } from '@admin/dto/setting-setup.dto';

@Injectable()
export class AdminService {
  // description: admin controller logger  //
  private logger = new Logger('AdminService');

  // description: repository  //
  constructor(private adminRepository: AdminRepository) {}

  //               function : displaySetup               //
  // description: P.01 config showroom view  //
  async displaySetup(authJwt: AuthJwt): Promise<DisplaySetupResult> {
    this.logger.verbose('⚙️⚙️⚙️⚙️⚙️ AdminService - displaySetup ⚙️⚙️⚙️⚙️⚙️');

    // description: jwt에서 country 추출  //
    const { country } = authJwt;

    // description: 데이터 초기화 상태 체크  //
    await this.adminRepository.checkData(country);

    // description: 데이터베이스 ElectrifiiedAll collection에서 전체 차량 이름 검색  //
    const all_electrifies = await this.adminRepository.getElectrifies();

    // description: 데이터베이스 ElectrifiedTranslation collection에서 해당 country의 displayable_electrifies 검색  //
    const { displayable_electrifies, electrified_version } =
      await this.adminRepository.getViewableElectrifies(country);

    // description: [condition C] 전체 차량 이름 (all_electrified_names), 허용한 차량 이름 (country_electrified_names) 반환  //
    return { all_electrifies, displayable_electrifies, electrified_version };
  }

  //               function : settingSetup               //
  // description: EV Showroom - Electrifiied viewable setting  //
  async settingSetup(
    authJwt: AuthJwt,
    dto: SettingSetupDTO,
  ): Promise<SettingSetupDTO> {
    this.logger.verbose('⚙️⚙️⚙️⚙️⚙️ AdminService - settingSetup ⚙️⚙️⚙️⚙️⚙️');

    // description: jwt에서 dealer_code, coutry 비할당구조  //
    const { dealer_code, country } = authJwt;

    // description: 데이터베이스 ElectrifiedTranslation collection에서 해당 country의 displayable_electrifies 변경  //
    const result = await this.adminRepository.settingViewableElectrifies(
      country,
      dto,
    );
    // todo: 변경 로그 기록

    // description: 완료 후 displayable_electrifies 반환  //
    return result;
  }

  //               function : displayTranslation               //
  // description: P.01 language translation view  //
  async displayTranslation(authJwt: AuthJwt, dto: DisplayTransitionDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ AdminService - sedisplayTranslationtingSetup ⚙️⚙️⚙️⚙️⚙️',
    );

    // description: jwt에서 country 추출  //
    const { country } = dto;

    this.logger.debug(`country: ${country}`);

    // description: 해당 국가 데이터 존재하는지 체크 //
    await this.adminRepository.checkData(country);

    // description: 번역 버전 불러오기 //
    const { translation_version } = await this.adminRepository.getTranslation(
      country,
    );

    // description: 데이터베이스 app_type에 해당하는 Translation collection에서 country, group, language를 조건으로 검색  //
    const translations = await this.adminRepository.getTranslationGroup(dto);

    // description: 완료 후 group 반환  //
    return { translation_version, translations };
  }

  //               function : displayTranslationItem               //
  // description: P.01 language translation. edit page  //
  async displayTranslationItem(
    authJwt: AuthJwt,
    dto: DisplayTransitionItemDTO,
  ) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ AdminService - displayTranslationItem  ⚙️⚙️⚙️⚙️⚙️',
    );

    // description: jwt에서 country 추출  //
    const { country } = authJwt;

    // description: 데이터베이스 app_type에 해당하는 All collection에서 group, item_group, sequence_num을 조건으로 검색  //
    const original_item = await this.adminRepository.getOriginalItem(dto);

    // description: 데이터베이스 app_type에 해당하는 Translation collection에서 country, language, group, item_group, sequnce_num을 조건으로 검색  //
    const translation_item = await this.adminRepository.getTranslationItem(dto);

    // description: 완료 후 all collection의 item 데이터와 translation collection의 item 데이터 반환  //
    return { original_item, translation_item };
  }

  //               function : editTranslation               //
  // description: Translation edit item  //
  async editTranslation(authJwt: AuthJwt, dto: EditTransitionDTO) {
    this.logger.verbose('⚙️⚙️⚙️⚙️⚙️ AdminService - editTranslation ⚙️⚙️⚙️⚙️⚙️');

    // description: jwt에서 dealer_code, country 추출  //
    const { dealer_code } = authJwt;
    const { app_type, country, group, language } = dto;

    // description: 데이터베이스 app_type에 해당하는 Translation collection에서 country, language, group, item_group, sequence_num에 해당하는 데이터를 translation_data로 수정  //
    await this.adminRepository.editTranslation(dto);

    // description: 데이터베이스 TranslationLog collection에 country, dealer_code, log_message (’${country}, ${language}, ${group}, ${item_group}, ${sequence_num} update’), translation_datetime(new Date)로 데이터 생성  //
    await this.adminRepository.loggingTranslation(dealer_code, dto);

    // description: 번역 버전 불러오기 //
    const { translation_version } = await this.adminRepository.getTranslation(
      country,
    );

    // description: 데이터베이스 app_type에 해당하는 Translation collection에서 country, group, language를 조건으로 검색  //
    const translations = await this.adminRepository.getTranslationGroup({
      app_type,
      country,
      group,
      language,
    });

    // description: 완료 후 group 반환  //
    return { translation_version, translations };
  }
}
