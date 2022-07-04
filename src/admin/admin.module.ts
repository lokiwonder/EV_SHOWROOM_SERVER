import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

import {
  ConnectivityAll,
  ConnectivityAllSchema,
} from '@common/schemas/ConnectivityAll.schema';
import {
  ElectrifiedAll,
  ElectrifiedAllSchema,
} from '@common/schemas/ElectrifiedAll.schema';
import {
  PowertrainAll,
  PowertrainAllSchema,
} from '@common/schemas/PowertrainAll.schema';
import {
  ElectrifiedTranslation,
  ElectrifiedTranslationSchema,
} from '@common/schemas/ElectrifiedTranslation.schema';
import {
  PowertrainTranslation,
  PowertrainTranslationSchema,
} from '@common/schemas/PowertrainTranslation.schema';
import {
  ConnectivityTranslation,
  ConnectivityTranslationSchema,
} from '@common/schemas/ConnectivityTranslation.schema';
import { Dealer, DealerSchema } from '@common/schemas/Dealer.schema';
import {
  TranslationLog,
  TranslationLogSchema,
} from '@common/schemas/TranslationLog.schema';
import { AdminRepository } from '@admin/admin.repository';
import { AuthModule } from '@auth/auth.module';
import { AuthStrategy } from '@auth/auth.strategy';

@Module({
  imports: [
    // description: MongooseModule 주입
    MongooseModule.forFeature([
      {
        name: ElectrifiedAll.name,
        schema: ElectrifiedAllSchema,
      },
      {
        name: PowertrainAll.name,
        schema: PowertrainAllSchema,
      },
      {
        name: ConnectivityAll.name,
        schema: ConnectivityAllSchema,
      },
      {
        name: ElectrifiedTranslation.name,
        schema: ElectrifiedTranslationSchema,
      },
      {
        name: PowertrainTranslation.name,
        schema: PowertrainTranslationSchema,
      },
      {
        name: ConnectivityTranslation.name,
        schema: ConnectivityTranslationSchema,
      },
      {
        name: Dealer.name,
        schema: DealerSchema,
      },
      {
        name: TranslationLog.name,
        schema: TranslationLogSchema,
      },
    ]),
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, AdminRepository, AuthStrategy],
})
export class AdminModule {}
