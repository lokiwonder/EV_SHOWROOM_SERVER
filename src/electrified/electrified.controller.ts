import { Body, Controller, Get, StreamableFile } from '@nestjs/common';
import { InitiallizeElectrifiedDTO } from './dto';
import { ElectrifiedService } from './electrified.service';

@Controller('apis/electrified')
export class ElectrifiedController {
  constructor(private readonly electrifiedService: ElectrifiedService) {}

  //   @Get('initialize')
  //   async initialize(
  //     @Body() dto: InitiallizeElectrifiedDTO,
  //   ): Promise<StreamableFile> {
  //     return new StreamableFile(await this.electrifiedService.initialize(dto));
  //   }
}
