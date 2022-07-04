import { Module } from '@nestjs/common';
import { ElectrifiedController } from './electrified.controller';
import { ElectrifiedService } from './electrified.service';

@Module({
  controllers: [ElectrifiedController],
  providers: [ElectrifiedService],
})
export class ElectrifiedModule {}
