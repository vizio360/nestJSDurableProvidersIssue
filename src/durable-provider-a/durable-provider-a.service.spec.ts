import { Test, TestingModule } from '@nestjs/testing';
import { DurableProviderAService } from './durable-provider-a.service';

describe('DurableProviderAService', () => {
  let service: DurableProviderAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DurableProviderAService],
    }).compile();

    service = module.get<DurableProviderAService>(DurableProviderAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
