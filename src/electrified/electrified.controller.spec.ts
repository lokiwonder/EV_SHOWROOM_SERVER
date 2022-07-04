import { Test, TestingModule } from '@nestjs/testing';
import { ElectrifiedController } from './electrified.controller';

describe('ElectrifiedController', () => {
  let controller: ElectrifiedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectrifiedController],
    }).compile();

    controller = module.get<ElectrifiedController>(ElectrifiedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
