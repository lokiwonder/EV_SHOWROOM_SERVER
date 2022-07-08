import { Asset, AssetSchema } from '@common/schemas/Asset.schema';
import {
  ElectrifiedAll,
  ElectrifiedAllSchema,
} from '@common/schemas/ElectrifiedAll.schema';
import {
  ElectrifiedTranslation,
  ElectrifiedTranslationSchema,
} from '@common/schemas/ElectrifiedTranslation.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectrifiedController } from './electrified.controller';
import { ElectrifiedResitory } from './electrified.repository';
import { ElectrifiedService } from './electrified.service';

@Module({
  imports: [
    // description: MongooseModule 주입
    MongooseModule.forFeature([
      {
        name: ElectrifiedAll.name,
        schema: ElectrifiedAllSchema,
      },
      {
        name: ElectrifiedTranslation.name,
        schema: ElectrifiedTranslationSchema,
      },
      {
        name: Asset.name,
        schema: AssetSchema,
      },
    ]),
  ],
  controllers: [ElectrifiedController],
  providers: [ElectrifiedService, ElectrifiedResitory],
})
export class ElectrifiedModule {}
