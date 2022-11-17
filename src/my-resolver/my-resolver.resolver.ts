import { Query, Resolver } from '@nestjs/graphql';
import { DurableProviderAService } from '../durable-provider-a/durable-provider-a.service';
import { NonDurableProviderBService } from '../non-durable-provider-b/non-durable-provider-b.service';

@Resolver()
export class MyResolverResolver {
  constructor(
    private nonDurable: NonDurableProviderBService,
    private durable: DurableProviderAService,
  ) {}

  @Query((returns) => String)
  recipe(): string {
    return 'hello';
  }
}
