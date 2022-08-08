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
import {
  ADMIN_API,
  DISPLAY_SETUP_API,
  DISPLAY_TRANSLATION_API,
  DISPLAY_TRANSLATION_ITEM_API,
  EDIT_TRANSLATION_API,
  SETTING_SETUP_API,
} from '@common/constants';

import { DisplayTransitionDTO } from '@admin/dto/display-transition.dto';
import { DisplayTransitionItemDTO } from '@admin/dto/display-transition-item.dto';
import { EditTransitionDTO } from '@admin/dto/edit-transition.dto';
import { SettingSetupDTO } from '@admin/dto/setting-setup.dto';

@Controller(ADMIN_API)
// description: jwt Guard //
@UseGuards(AuthGuard('jwt'))
export class AdminController {
  // description: admin controller logger //
  private logger = new Logger('AdminController');

  // description: service //
  constructor(private adminService: AdminService) {}

  // description: P.01 config showroom view //
  @Get(DISPLAY_SETUP_API)
  displaySetup(@GetJwtData() authJwt: AuthJwt) {
    this.logger.verbose('🔛🔛🔛🔛🔛 Access apis/admin/displaySetup 🔛🔛🔛🔛🔛');
    return this.adminService.displaySetup(authJwt);
  }

  // description: EV Showroom - Electrifiied viewable setting //
  @Patch(SETTING_SETUP_API)
  settingSetup(@GetJwtData() authJwt: AuthJwt, @Body() dto: SettingSetupDTO) {
    this.logger.verbose('🔛🔛🔛🔛🔛 Access apis/admin/settingSetup 🔛🔛🔛🔛🔛');
    return this.adminService.settingSetup(authJwt, dto);
  }

  // description: P.01 language translation view //
  @Post(DISPLAY_TRANSLATION_API)
  displayTranslation(
    @GetJwtData() authJwt: AuthJwt,
    @Body() dto: DisplayTransitionDTO,
  ) {
    this.logger.verbose(
      '🔛🔛🔛🔛🔛 Access apis/admin/displayTranslation 🔛🔛🔛🔛🔛',
    );
    return this.adminService.displayTranslation(authJwt, dto);
  }

  // description: P.01 language translation. edit page //
  @Post(DISPLAY_TRANSLATION_ITEM_API)
  displayTranslationItem(
    @GetJwtData() authJwt: AuthJwt,
    @Body() dto: DisplayTransitionItemDTO,
  ) {
    this.logger.verbose(
      '🔛🔛🔛🔛🔛 Access apis/admin/displayTranslationItem 🔛🔛🔛🔛🔛',
    );
    return this.adminService.displayTranslationItem(authJwt, dto);
  }

  // description: Translation edit item //
  @Patch(EDIT_TRANSLATION_API)
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
