import { Test, TestingModule } from '@nestjs/testing';
import { LogRepository } from './log.repository';

describe('LogRepository', () => {
  let provider: LogRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogRepository],
    }).compile();

    provider = module.get<LogRepository>(LogRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
