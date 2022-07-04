import { Test, TestingModule } from '@nestjs/testing';
import { AdminRepository } from './admin.repository';

describe('AdminRepository', () => {
  let provider: AdminRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminRepository],
    }).compile();

    provider = module.get<AdminRepository>(AdminRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
