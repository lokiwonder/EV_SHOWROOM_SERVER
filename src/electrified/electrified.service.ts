import { Injectable, Logger, MethodNotAllowedException } from '@nestjs/common';
import { InitiallizeElectrifiedDTO } from './dto';
import { ElectrifiedResitory } from './electrified.repository';

import { ElectrifiedData, Setting } from '@common/classes/Elecrified.class';
import { ELECTRIFIED } from '@common/constants';

import { v4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import * as JSZip from 'jszip';
import ElectrifiedCheckDTO from './dto/electrified-check.dto';
import TranslationCheckDTO from './dto/translation-check.dto';

// description: //
@Injectable()
export class ElectrifiedService {
  private logger = new Logger('ElectrifiedService');
  // description: //
  constructor(private readonly electrifiedResitory: ElectrifiedResitory) {}

  // description: //
  async electrifiedInitialize(dto: InitiallizeElectrifiedDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedService - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );
    // description: dto 비할당 구조 //
    const { country_code } = dto;

    // description: DB 'in' operator 조건에 사용 할 Set
    const electrified_names = new Array<{
      asset_name: string;
      asset_version: number;
    }>();
    // description: 반환할 압축 파일 //
    const zip = new JSZip();
    // description: 데이터베이스에서 해당 국가에 대한 데이터 검색 //
    const electrified_data =
      await this.electrifiedResitory.electrifiedInitialize(country_code);

    // description: 반환 JSON 데이터 //
    const result_data = getInitialJSON(dto, electrified_data);
    // description: data.json 압축열에 삽입
    zip.file('data.json', JSON.stringify(result_data));
    // description: 데이터베이스에서 검색한 데이터에서 이름, 버전 추출
    getElectrifiedNames(result_data.translations, electrified_names);
    // description: asset 데이터 검색
    const assets = await this.electrifiedResitory.getAssets(electrified_names);
    // description: asset 데이터 압축
    zipAssets(assets, zip);
    // description: 압축 파일 반환
    return await compress(zip);
  }

  // description: electrified version Check //
  async electrifiedCheck(dto: ElectrifiedCheckDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedService - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );
    // description: dto 비할당 구조 //
    const { electrified_version, country_code } = dto;
    this.logger.debug(country_code);
    // description: 반환할 압축 파일 //
    const zip = new JSZip();
    // description: 해당 국가 코드의 번역 정보 가져오기
    const electrified_data =
      await this.electrifiedResitory.getTranslationElectrified(country_code);
    // description: db electrified_version과 app electrified_version 비교
    if (electrified_version === electrified_data.electrified_version)
      throw new MethodNotAllowedException('The latest version');
    // description: 반환 JSON 데이터 //
    const result_data = getInitialJSON(dto, electrified_data);
    // description: data.json 압축열에 삽입
    zip.file('data.json', JSON.stringify(result_data));
    // description: 압축 파일 반환
    return await compress(zip);
  }

  // description: //
  assetCheck() {
    // description: //
  }

  // description: //
  async translationCheck(dto: TranslationCheckDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedService - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );
    // description: dto 비할당 구조 //
    const { translation_version, country_code } = dto;
    // description: 반환할 압축 파일 //
    const zip = new JSZip();
    // description: 해당 국가 코드의 번역 정보 가져오기
    const electrified_data =
      await this.electrifiedResitory.getTranslationElectrified(country_code);
    // description: db electrified_version과 app electrified_version 비교
    if (translation_version === electrified_data.translation_version)
      throw new MethodNotAllowedException('The latest version');
    // description: 반환 JSON 데이터 //
    const result_data = getInitialJSON(dto, electrified_data);
    // description: data.json 압축열에 삽입
    zip.file('data.json', JSON.stringify(result_data));
    // description: 압축 파일 반환
    return await compress(zip);
  }
}

//                    function                    //
// description: 데이터베이스에서 검색한 데이터에서 이름만 추출 //
const getElectrifiedNames = (
  list,
  set: Array<{ asset_name: string; asset_version: number }>,
) => {
  list.forEach((item) =>
    item.electrifies.forEach((electrified) => {
      const { electrified_item_name, asset_version } = electrified;
      set.push({ asset_name: electrified_item_name, asset_version });
    }),
  );
};

// description: 반환할 JSON 초기화 //
const getInitialJSON = (dto, electrified_data) => {
  // description: //
  const { app_id, app_version, country_code } = dto;
  // description: Setting 데이터 set //
  const {
    electrified_version,
    translation_version,
    languages,
    translations,
    default_language,
    displayable_electrifies,
  } = electrified_data;

  const setting_data = new Setting(
    app_id,
    ELECTRIFIED,
    country_code,
    app_version,
    electrified_version,
    translation_version,
    displayable_electrifies,
    languages,
    default_language,
  );
  // description: JSON 데이터 반환 //
  return new ElectrifiedData(setting_data, translations);
};

// description: //
const zipAssets = (assets, zip) => {
  assets.forEach((asset) => zipAsset(asset, zip));
};

// description: //
const zipAsset = (asset, zip) => {
  asset.images.forEach((image) =>
    addZip(zip, asset.asset_name, asset.asset_version, image, 'images'),
  );
  asset.videos.forEach((video) =>
    addZip(zip, asset.asset_name, asset.asset_version, video, 'videos'),
  );
  asset.lotties.forEach((lottie) =>
    addZip(zip, asset.asset_name, asset.asset_version, lottie, 'lotties'),
  );
};

// description: //
const addZip = (zip, asset_name, asset_version, file_name, type) => {
  zip
    .folder(`${asset_name}`)
    .file(
      file_name,
      fs.readFileSync(
        path.join(
          __dirname,
          `../../public`,
          asset_name,
          `${asset_version}`,
          type,
          file_name,
        ),
      ),
    );
};

// description: //
const compress = (zip) => {
  // description: uuid로 파일명 생성
  const zip_name = `${v4()}.zip`;
  return new Promise<fs.ReadStream>((resolve) => {
    zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(zip_name))
      .on('finish', async function () {
        const streamFile = await createFileStream(zip_name);
        // description: //
        try {
          fs.unlinkSync(path.join(__dirname, '../..', zip_name));
        } catch (e) {
          console.log('file unlink warning');
        }
        resolve(streamFile);
      });
  });
};

// description: //
const createFileStream = (zip_name: string) => {
  return new Promise<fs.ReadStream>((resolve) => {
    resolve(fs.createReadStream(path.join(__dirname, '../..', zip_name)));
  });
};

//                    function                    //
