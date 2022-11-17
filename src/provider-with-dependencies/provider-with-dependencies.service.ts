import { Injectable, Scope } from '@nestjs/common';
import { DurableProviderAService } from '../durable-provider-a/durable-provider-a.service';
import { NonDurableProviderBService } from '../non-durable-provider-b/non-durable-provider-b.service';

@Injectable({ scope: Scope.REQUEST, durable: false })
export class ProviderWithDependenciesService {
  constructor(
    private nonDurable: NonDurableProviderBService,
    private durable: DurableProviderAService,
  ) {
    console.log('ProviderWithDependenciesService created');
  }

  helloworld() {
    return 'hello world!';
  }
}
