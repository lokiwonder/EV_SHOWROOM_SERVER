import { Body, Controller, Logger, Post, StreamableFile } from '@nestjs/common';
import { InitiallizeElectrifiedDTO } from './dto';
import ElectrifiedCheckDTO from './dto/electrified-check.dto';
import TranslationCheckDTO from './dto/translation-check.dto';
import { ElectrifiedService } from './electrified.service';

@Controller('apis/electrified')
export class ElectrifiedController {
  private logger = new Logger('ElectrifiedController');

  constructor(private readonly electrifiedService: ElectrifiedService) {}

  // description: initialize //
  @Post('electrifiedInitialize')
  async electrifiedInitialize(@Body() dto: InitiallizeElectrifiedDTO) {
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
