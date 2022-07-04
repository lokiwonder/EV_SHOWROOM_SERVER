import { Test, TestingModule } from '@nestjs/testing';
import { PowertrainController } from './powertrain.controller';

describe('PowertrainController', () => {
  let controller: PowertrainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowertrainController],
    }).compile();

    controller = module.get<PowertrainController>(PowertrainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
