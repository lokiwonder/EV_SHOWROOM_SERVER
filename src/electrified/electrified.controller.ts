import {
  Body,
  Controller,
  Logger,
  Post,
  Res,
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
@Controller('apis/electrified')
export class ElectrifiedController {
  // description: Electrified Logger //
  private logger = new Logger('ElectrifiedController');

  constructor(private readonly electrifiedService: ElectrifiedService) {}

  // description: setting data 반환 함수 //
  @Post('electrifiedData')
  async electrifiedData(@Body() dto: ElectrifiedDataDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedController - electrifiedData  ⚙️⚙️⚙️⚙️⚙️',
    );

    return this.electrifiedService.electrifiedData(dto);
  }

  // description: initialize //
  @Post('electrifiedInitialize')
  async electrifiedInitialize(
    @Body() dto: InitiallizeElectrifiedDTO,
    @Res() res,
  ) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedController - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );

    return new StreamableFile(
      await this.electrifiedService.electrifiedInitialize(dto),
    );
  }

  // description: electrified version check //
  @Post('electrifiedCheck')
  async electrifiedCheck(@Body() dto: ElectrifiedCheckDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedController - electrifiedCheck  ⚙️⚙️⚙️⚙️⚙️',
    );

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
  @Post('translationCheck')
  async translationCheck(@Body() dto: TranslationCheckDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedController - translationCheck  ⚙️⚙️⚙️⚙️⚙️',
    );

    return new StreamableFile(
      await this.electrifiedService.translationCheck(dto),
    );
  }
}
