import { Body, Controller, Logger, Post, StreamableFile } from '@nestjs/common';
import { InitiallizeElectrifiedDTO } from './dto';
import { ElectrifiedService } from './electrified.service';

@Controller('apis/electrified')
export class ElectrifiedController {
  private logger = new Logger('ElectrifiedController');

  constructor(private readonly electrifiedService: ElectrifiedService) {}

  // description: initialize //
  // todo: app_id, country_code //
  @Post('electrifiedInitialize')
  async electrifiedInitialize(@Body() dto: InitiallizeElectrifiedDTO) {
    this.logger.verbose(
      '⚙️⚙️⚙️⚙️⚙️ ElectrifiedController - electrifiedInitialize  ⚙️⚙️⚙️⚙️⚙️',
    );

    // return await this.electrifiedService.electrifiedInitialize(dto);
    return new StreamableFile(
      await this.electrifiedService.electrifiedInitialize(dto),
    );
  }

  // description: electrified version check //
  // @Get('electrifiedCheck')
  // async electrifiedCheck() {
  //   return new StreamableFile(await this.electrifiedService.electrifiedCheck());
  // }

  // description: electrified asset version check //
  // @Get('assetCheck')
  // async assetCheck() {
  //   return new StreamableFile(await this.electrifiedService.assetCheck());
  // }

  // description: electrified translation version check //
  // @Get('translationCheck')
  // async translationCheck() {
  //   return new StreamableFile(await this.electrifiedService.translationCheck());
  // }
}
