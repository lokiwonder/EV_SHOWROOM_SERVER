import {
  Controller,
  Get,
  Logger,
  Param,
  ServiceUnavailableException,
  StreamableFile,
} from '@nestjs/common';
import { FILE_API, GET_IMAGE2_API, GET_IMAGE_API } from '@common/constants';

import * as path from 'path';
import * as fs from 'fs';

@Controller(FILE_API)
export class FileController {
  // description: admin controller logger //
  private logger = new Logger('FileController');

  @Get(GET_IMAGE_API)
  getImage(@Param('image') image: string) {
    try {
      const file = fs.readFileSync(
        path.join(__dirname, `../../public/images/${image}`),
      );
      return new StreamableFile(file);
    } catch (e) {
      this.logger.error(`😵 FileController - getImage`);
      this.logger.error(`😵 ERROR MESSAGE - ${e.message}`);

      throw new ServiceUnavailableException('File Error');
    }
  }

  @Get(GET_IMAGE2_API)
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
      this.logger.error(`😵 FileController - getImage`);
      this.logger.error(`😵 ERROR MESSAGE - ${e.message}`);

      throw new ServiceUnavailableException('File Error');
    }
  }
}
