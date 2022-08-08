import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { LogRepository } from './log.repository';

@Module({
  controllers: [LogController],
  providers: [LogService, LogRepository]
})
export class LogModule {}
