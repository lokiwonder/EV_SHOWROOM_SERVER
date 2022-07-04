import { Module } from '@nestjs/common';
import { PowertrainController } from './powertrain.controller';
import { PowertrainService } from './powertrain.service';

@Module({
  controllers: [PowertrainController],
  providers: [PowertrainService],
})
export class PowertrainModule {}
