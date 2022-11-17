import { Test, TestingModule } from '@nestjs/testing';
import { NonDurableProviderBService } from './non-durable-provider-b.service';

describe('NonDurableProviderBService', () => {
  let service: NonDurableProviderBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonDurableProviderBService],
    }).compile();

    service = module.get<NonDurableProviderBService>(NonDurableProviderBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
