import { Test, TestingModule } from '@nestjs/testing';
import { PowertrainService } from './powertrain.service';

describe('PowertrainService', () => {
  let service: PowertrainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowertrainService],
    }).compile();

    service = module.get<PowertrainService>(PowertrainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
