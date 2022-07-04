import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ElectrifiedModule } from './electrified/electrified.module';
import { PowertrainModule } from './powertrain/powertrain.module';
import { ConnectivityModule } from './connectivity/connectivity.module';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

import * as config from 'config';

const dbConfig = config.get('db');

@Module({
  imports: [
    // description: 'Web - Admin'에서 사용하는 모듈
    AdminModule,
    // description: 'Electron App - Electrified'에서 사용하는 모듈
    ElectrifiedModule,
    // description: 'Electron App - Powertrain'에서 사용하는 모듈
    PowertrainModule,
    // description: 'Electron App - Connectivity'에서 사용하는 모듈
    ConnectivityModule,
    // description: 전체 권한 관리 모듈
    AuthModule,
    // description: 파일 관리 모듈
    FileModule,
    // description: MongoDB 접속 모듈
    MongooseModule.forRoot(dbConfig.database),
  ],
})
export class AppModule {}
