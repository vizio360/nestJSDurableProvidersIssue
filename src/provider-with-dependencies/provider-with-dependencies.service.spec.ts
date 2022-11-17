import { Test, TestingModule } from '@nestjs/testing';
import { ProviderWithDependenciesService } from './provider-with-dependencies.service';

describe('ProviderWithDependenciesService', () => {
  let service: ProviderWithDependenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderWithDependenciesService],
    }).compile();

    service = module.get<ProviderWithDependenciesService>(ProviderWithDependenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
