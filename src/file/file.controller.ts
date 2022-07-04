import {
  Controller,
  Get,
  Logger,
  Param,
  Res,
  ServiceUnavailableException,
  StreamableFile,
} from '@nestjs/common';
import { FileService } from './file.service';

import * as path from 'path';
import * as fs from 'fs';

@Controller('apis/file')
export class FileController {
  // description: admin controller logger
  private logger = new Logger('FileController');

  // description: service
  constructor(private fileService: FileService) {}

  @Get('getImage/:image')
  getImage(@Param('image') image: string) {
    try {
      const file = fs.readFileSync(
        path.join(__dirname, `../../public/images/${image}`),
      );
      // res.writeHead(200, { 'Context-Type': 'image/png' });
      // res.write(file);
      // res.end();
      return new StreamableFile(file);
    } catch (e) {
      this.logger.error(`😵😵😵😵😵 FileController - getImage 😵😵😵😵😵`);
      this.logger.error(`😵😵😵😵😵 ERROR MESSAGE - ${e.message} 😵😵😵😵😵`);

      throw new ServiceUnavailableException('File Error');
    }
  }
}
