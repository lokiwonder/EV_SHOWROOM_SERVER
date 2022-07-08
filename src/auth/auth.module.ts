import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dealer, DealerSchema } from '@common/schemas/Dealer.schema';
import * as config from 'config';
import { AuthRepository } from '@auth/auth.repository';
import { AuthStrategy } from '@auth/auth.strategy';
import { HttpModule } from '@nestjs/axios';

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    // description: jwt passport module 주입
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // description: jwt module 주입
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    }),
    // description: mongoose module 주입
    MongooseModule.forFeature([
      {
        name: Dealer.name,
        schema: DealerSchema,
      },
    ]),
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AuthStrategy],
  exports: [AuthStrategy],
})
export class AuthModule {}
