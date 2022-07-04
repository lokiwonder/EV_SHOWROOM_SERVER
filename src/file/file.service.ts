import { Injectable } from '@nestjs/common';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FileService {
  // description: 이미지 가져오기
  getImage(image: string) {
    let file;
    fs.readFile(
      path.join(__dirname, `../../public/images/${image}`),
      (e, data) => {
        file = data;
      },
    );

    return file;
  }
}
