import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
// import { DurableProviderAService } from '../durable-provider-a/durable-provider-a.service';
// import { NonDurableProviderBService } from '../non-durable-provider-b/non-durable-provider-b.service';

@Resolver()
export class MyResolverResolver {
  constructor(
    // private nonDurable: NonDurableProviderBService,
    // private durable: DurableProviderAService,
    @Inject(REQUEST) public readonly request: Request,
  ) {
    console.log('MyResolverResolver created');
    console.log('====================================');
    console.log(`Is request undefined: ${typeof request === 'undefined'}`);
    console.log('====================================');
  }

  @Query((returns) => String)
  recipe(): string {
    return 'hello';
  }
}
