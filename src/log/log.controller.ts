import { ELECTRIFIED_ACCESS_LOG_API, LOG_API } from '@common/constants';
import { Body, Controller, Logger, Post } from '@nestjs/common';
import AccessLogDTO from './dto/access-log-dto';
import { LogService } from './log.service';

@Controller(LOG_API)
export class LogController {
  // description: admin controller logger //
  private logger = new Logger('LogController');

  constructor(private logService: LogService) {}

  @Post(ELECTRIFIED_ACCESS_LOG_API)
  electrifiedAccessLog(@Body() dto: AccessLogDTO) {
    this.logger.verbose('🔛🔛🔛🔛🔛 Access apis/admin/displaySetup 🔛🔛🔛🔛🔛');
    this.logService
  }
}
