import { Test, TestingModule } from '@nestjs/testing';
import { ElectrifiedService } from './electrified.service';

describe('ElectrifiedService', () => {
  let service: ElectrifiedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectrifiedService],
    }).compile();

    service = module.get<ElectrifiedService>(ElectrifiedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
