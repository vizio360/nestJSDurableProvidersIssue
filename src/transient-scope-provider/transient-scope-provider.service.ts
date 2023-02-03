import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientScopeProviderService {
  constructor() {
    console.log('TransientScopeProviderService created');
  }
}
