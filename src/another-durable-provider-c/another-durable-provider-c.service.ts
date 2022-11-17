import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class AnotherDurableProviderCService {
  constructor() {
    console.log('AnotherDurableProviderCService created');
  }
}
