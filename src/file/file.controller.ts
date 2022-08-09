import {
  Controller,
  Get,
  Logger,
  Param,
  ServiceUnavailableException,
  StreamableFile,
} from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';

@Controller('apis/file')
export class FileController {
  // description: admin controller logger
  private logger = new Logger('FileController');

  @Get('getImage/:image')
  getImage(@Param('image') image: string) {
    try {
      const file = fs.readFileSync(
        path.join(__dirname, `../../public/images/${image}`),
      );
      return new StreamableFile(file);
    } catch (e) {
      this.logger.error(`😵😵😵😵😵 FileController - getImage 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('File Error');
    }
  }

  @Get('getImage2/:item/:version/:image')
  getImage2(
    @Param('item') item: string,
    @Param('version') version: number,
    @Param('image') image: string,
  ) {
    try {
      const file = fs.readFileSync(
        path.join(__dirname, `../../public/images/${item}/${version}/${image}`),
      );
      return new StreamableFile(file);
    } catch (e) {
      this.logger.error(`😵😵😵😵😵 FileController - getImage 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('File Error');
    }
  }
}
