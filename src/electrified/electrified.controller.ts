import {
  ELECTRIFIED_API,
  ELECTRIFIED_CHECK_API,
  ELECTRIFIED_DATA_API,
  ELECTRIFIED_INITIALIZE_API,
  TRANSLATION_CHECK,
} from '@common/constants';
import { COUNTRY_CODE } from '@common/enums';
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  StreamableFile,
} from '@nestjs/common';
import {
  InitiallizeElectrifiedDTO,
  ElectrifiedCheckDTO,
  TranslationCheckDTO,
  ElectrifiedDataDTO,
} from './dto';
import { ElectrifiedService } from './electrified.service';

// description: Electrified App Controller //
@Controller(ELECTRIFIED_API)
export class ElectrifiedController {
  // description: Electrified Logger //
  private logger = new Logger('ElectrifiedController');

  constructor(private readonly electrifiedService: ElectrifiedService) {}

  // description: initialize //
  @Get(ELECTRIFIED_INITIALIZE_API)
  async electrifiedInitialize(
    @Param('app_id') app_id: string,
    @Param('app_version') app_version: number,
    @Param('country_code') country_code: COUNTRY_CODE,
  ) {
    this.logger.verbose('⚙️ ElectrifiedController - electrifiedInitialize');

    const dto = { app_id, app_version, country_code };

    return new StreamableFile(
      await this.electrifiedService.electrifiedInitialize(dto),
    );
  }

  // description: electrified version check //
  @Post(ELECTRIFIED_CHECK_API)
  async electrifiedCheck(@Body() dto: ElectrifiedCheckDTO) {
    this.logger.verbose('⚙️ ElectrifiedController - electrifiedCheck');

    return new StreamableFile(
      await this.electrifiedService.electrifiedCheck(dto),
    );
  }

  // description: electrified asset version check //
  // @Get('assetCheck')
  // async assetCheck() {
  //   return new StreamableFile(await this.electrifiedService.assetCheck());
  // }

  // description: electrified translation version check //
  @Post(TRANSLATION_CHECK)
  async translationCheck(@Body() dto: TranslationCheckDTO) {
    this.logger.verbose('⚙️ ElectrifiedController - translationCheck');

    return new StreamableFile(
      await this.electrifiedService.translationCheck(dto),
    );
  }
}
