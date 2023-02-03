import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class DefaultScopeProviderService {
  constructor() {
    console.log('DefaultScopeProviderService created');
  }
}
