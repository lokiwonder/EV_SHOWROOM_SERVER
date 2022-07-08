import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const serverConfig = config.get('server');
  const port = serverConfig.port;
  app.enableCors();

  Logger.log(`Application running on port ${port}`);
  await app.listen(port);
}
bootstrap();
