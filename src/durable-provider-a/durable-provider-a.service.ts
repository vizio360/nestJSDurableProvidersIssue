import { CACHE_MANAGER, Inject, Injectable, Scope } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class DurableProviderAService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    console.log('DurableProviderAService created');
  }
}
