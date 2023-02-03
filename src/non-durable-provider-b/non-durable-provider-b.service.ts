import { Injectable, Scope } from '@nestjs/common';
import { AnotherDurableProviderCService } from '../another-durable-provider-c/another-durable-provider-c.service';

@Injectable({ scope: Scope.REQUEST })
export class NonDurableProviderBService {
  constructor(private dep: AnotherDurableProviderCService) {
    console.log('NonDurableProviderBService created');
  }
}
