import { AdminService } from '@admin/admin.service';
import { AuthGuard } from '@nestjs/passport';
import {
  Body,
  Controller,
  Get,
  Logger,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetJwtData } from '@common/decorators/access-token.decorator';
import AuthJwt from '@common/types/AuthJwt.type';
import { DisplayTransitionDTO } from '@admin/dto/display-transition.dto';
import { DisplayTransitionItemDTO } from '@admin/dto/display-transition-item.dto';
import { EditTransitionDTO } from '@admin/dto/edit-transition.dto';

import { SettingSetupDTO } from '@admin/dto/setting-setup.dto';

@Controller('apis/admin')
// description: jwt Guard
@UseGuards(AuthGuard('jwt'))
export class AdminController {
  // description: admin controller logger
  private logger = new Logger('AdminController');

  // description: service
  constructor(private adminService: AdminService) {}

  // description: P.01 config showroom view
  @Get('displaySetup')
  displaySetup(@GetJwtData() authJwt: AuthJwt) {
    this.logger.verbose('🔛🔛🔛🔛🔛 Access apis/admin/displaySetup 🔛🔛🔛🔛🔛');
    return this.adminService.displaySetup(authJwt);
  }

  // description: EV Showroom - Electrifiied viewable setting
  @Patch('settingSetup')
  settingSetup(@GetJwtData() authJwt: AuthJwt, @Body() dto: SettingSetupDTO) {
    this.logger.verbose('🔛🔛🔛🔛🔛 Access apis/admin/settingSetup 🔛🔛🔛🔛🔛');
    return this.adminService.settingSetup(authJwt, dto);
  }

  // description: P.01 language translation view
  @Post('displayTranslation')
  displayTranslation(
    @GetJwtData() authJwt: AuthJwt,
    @Body() dto: DisplayTransitionDTO,
  ) {
    this.logger.verbose(
      '🔛🔛🔛🔛🔛 Access apis/admin/displayTranslation 🔛🔛🔛🔛🔛',
    );
    return this.adminService.displayTranslation(authJwt, dto);
  }

  // description: P.01 language translation. edit page
  @Post('displayTranslationItem')
  displayTranslationItem(
    @GetJwtData() authJwt: AuthJwt,
    @Body() dto: DisplayTransitionItemDTO,
  ) {
    this.logger.verbose(
      '🔛🔛🔛🔛🔛 Access apis/admin/displayTranslationItem 🔛🔛🔛🔛🔛',
    );
    return this.adminService.displayTranslationItem(authJwt, dto);
  }

  // description: Translation edit item
  @Patch('editTranslation')
  editTranslation(
    @GetJwtData() authJwt: AuthJwt,
    @Body() dto: EditTransitionDTO,
  ) {
    this.logger.verbose(
      '🔛🔛🔛🔛🔛 Access apis/admin/editTranslation 🔛🔛🔛🔛🔛',
    );
    return this.adminService.editTranslation(authJwt, dto);
  }
}
