import { Test, TestingModule } from '@nestjs/testing';
import { AnotherDurableProviderCService } from './another-durable-provider-c.service';

describe('AnotherDurableProviderCService', () => {
  let service: AnotherDurableProviderCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnotherDurableProviderCService],
    }).compile();

    service = module.get<AnotherDurableProviderCService>(AnotherDurableProviderCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
