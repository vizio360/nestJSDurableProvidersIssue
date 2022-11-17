import { Test, TestingModule } from '@nestjs/testing';
import { MyResolverResolver } from './my-resolver.resolver';

describe('MyResolverResolver', () => {
  let resolver: MyResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyResolverResolver],
    }).compile();

    resolver = module.get<MyResolverResolver>(MyResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
